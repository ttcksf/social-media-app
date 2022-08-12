import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpeg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/uploadAction.js";

const PostShare = () => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const desc = useRef();
  //authReducerのステート(user,token)からuserを取得する
  const { user } = useSelector((state) => state.authReducer.authData);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  //投稿したらテキストと画像を空欄に戻す
  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      //user._idを投稿のユーザーIDにする
      userId: user._id,
      //useRefを使ってテキストを取得する
      desc: desc.current.value,
    };

    if (image) {
      //JSのForm作成する関数
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      //server postModal.jsのimageをfilenameの値にする
      newPost.image = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };
  return (
    <div className="PostShare">
      <img
        src={
          user.coverPicture
            ? serverPublic + user.coverPicture
            : serverPublic + "defaultProfile.png"
        }
        alt=""
      />
      <div>
        <input ref={desc} required type="text" placeholder="Whats happening" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button
            className="button ps-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            {/* ×ボタンをクリックしたら画像を消す */}
            <UilTimes onClick={() => setImage(null)} />
            {/* 画像を表示する */}
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
