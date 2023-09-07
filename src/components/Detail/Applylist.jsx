import { useEffect, useState } from "react";
import NavBar from "../Main/NavBar";
<<<<<<< HEAD
import Footer from "../Main/Footer";
// import {useUserData} from "../Detail/UserDataContext";

const Applylist = ({userData}) => {
  const type = Object.keys(userData)[2];
  const id = parseInt(Object.values(userData)[2].id, 10);
  const name = Object.values(userData)[2].name;
  const typeAge = Object.values(userData)[2].age;
  // const contact = Object.values(userData)[1].address;
  // const typeAddress = Object.values(userData)[1].address;
  // const typeAddress = Object.values(userData)[1].address;

  console.log(type)
  console.log(id)
  console.log(userData)
  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "800px",
  };


  const handleEdit = () => {
    // 수정 버튼을 클릭할 때 수행할 작업 추가.
=======
// import {useUserData} from "../Detail/UserDataContext";

const Applylist = ({ userData }) => {
  console.log(userData);

  const type = Object.values(userData)[1];
  console.log(type);
  const detailTitle = `registerDetails_${type}`;
  console.log(detailTitle);

  const id = Object.values(userData)[0][`${type}`]?.id;
  const name = Object.values(userData)[0][`${type}`]?.name;
  const age = Object.values(userData)[0][`${type}`]?.age;
  const gender = Object.values(userData)[0][`${type}`]?.gender;
  const contact = Object.values(userData)[0][`${type}`]?.contact;
  const address = Object.values(userData)[0][`${type}`]?.address;
  const email = Object.values(userData)[0][`${type}`]?.email;
  const password = Object.values(userData)[0][`${type}`]?.password;
  const registerDate = userData?.result?.[detailTitle]?.[0]?.[0];
  const comment = userData?.result?.[detailTitle]?.[0]?.[1];
  const startTime = userData?.result?.[detailTitle]?.[0]?.[2];
  const endTime = userData?.result?.[detailTitle]?.[0]?.[3];

  const [editedName, setEditedName] = useState(name); // 수정된 이름을 저장하는 상태
  const [editedAge, setEditedAge] = useState(age);
  const [editedGender, setEditedGender] = useState(gender);
  const [editedContact, setEditedContact] = useState(contact);
  const [editedAddress, setEditedAddress] = useState(address);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPassword, setEditedPassword] = useState(password);
  const [editedRegisterDate, setEditedRegisterDate] = useState(registerDate);
  const [editedComment, setEditedComment] = useState(comment);
  const [editedStarttime, setEditedStarttime] = useState(startTime);
  const [editedEndtime, setEditedEndtime] = useState(endTime);

  // console.log(type)
  // console.log(id)
  // console.log(userData)
  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "2000px",
>>>>>>> yeji
  };

  const handleDelete = async () => {
    // 삭제 버튼을 클릭할 때 수행할 작업 추가.
    try {
<<<<<<< HEAD
      {/* type이랑 id값 검색해서 필요 */}
=======
      {
        /* type이랑 id값 검색해서 필요 */
      }
>>>>>>> yeji
      const formData = {
        id,
        type,
      };
<<<<<<< HEAD
      
      // 데이터 출력
      console.log("전송할 데이터:", formData);
      const url =
        "http://43.201.76.22:8080/api/careinfo/delete/" + type + "/"+ id; 
        
=======

      // 데이터 출력
      console.log("전송할 데이터:", formData);
      const url =
        "http://43.201.76.22:8080/api/careinfo/delete/" + type + "/" + id;
>>>>>>> yeji

      const jsonData = JSON.stringify(formData);

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });
<<<<<<< HEAD
      
=======

>>>>>>> yeji
      if (response.ok) {
        // 삭제 성공
        alert("삭제 성공!");
      } else {
        // 삭제 실패
        alert("삭제 실패");
      }
    } catch (error) {
      console.error("삭제 에러:", error);
    }
  };

<<<<<<< HEAD
  const back = () => {
    window.location.href = "/CareApplySelect";
  }

  useEffect(() => {
  }, [])

  return (
    <>
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen font-[Pretendard] mt-[-200px]">
        <div className="bg-white rounded-3xl" style={divStyle}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-[Pretendard]">
              나의 지원현황을 확인하세요
            </p>
            <p className="text-left text-2xl">신청서</p>
            <div className="mt-20 text-5C5C5C ">
              이름 : {name}
              <br/>
              나이 : {typeAge}
              <br/>
              {/* 주소 : {typeAddress} */}
              <br/>


            </div>
          </div>
          <div className="flex font-[Pretendard] justify-end mr-20 mt-[150px]">
=======
  const handleEdit = async () => {
    try {
      // 업데이트할 데이터 생성
      const updatedData = {
        // id,
        // type,
        name: editedName,
        age: editedAge,
        gender: editedGender,
        address: editedAddress,
        contact: editedContact,
        email: editedEmail,
        password: editedPassword,
        registerDate: editedRegisterDate,
        comment: editedComment,
        startTime: editedStarttime,
        endTime: editedEndtime,
      };

      // 데이터 출력 (테스트 목적)
      console.log("업데이트할 데이터:", updatedData);

      // API 엔드포인트 URL 설정 (백엔드 API에 맞게 수정 필요)
      const url = `http://43.201.76.22:8080/api/careinfo/edit/${type}/${id}`;

      // 데이터를 JSON 형식으로 변환
      const jsonData = JSON.stringify(updatedData);

      // PUT 메서드를 사용하여 데이터 업데이트 요청
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (response.ok) {
        // 업데이트 성공
        alert("수정 성공!");
      } else {
        // 업데이트 실패
        alert("수정 실패");
      }
    } catch (error) {
      console.error("수정 에러:", error);
    }
  };

  const back = () => {
    window.location.href = "/CareApplySelect";
  };

  useEffect(() => {}, []);

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen mt-[-200px]">
        <div className="bg-white rounded-3xl" style={divStyle}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              나의 지원현황을 확인하세요
            </p>
            <p className="text-left font-Pretendard text-2xl">신청서</p>
            <div className="mt-20 text-5C5C5C font-Pretendard">
              이름:
              <input
                type="text"
                value={editedName}
                className="border border-gray-300 rounded-lg ml-10 p-2 w-96"
                onChange={(e) => setEditedName(e.target.value)}
              />
              <div className="border-t border-FCFCFC mt-4 ml-4 mb-1 p-2 w-[500px]"></div>
              <div className="ml-[50px] text-5C5C5C text-left font-Pretendard flex items-center">
                나이:
                <input
                  type="number"
                  value={editedAge}
                  className="border border-gray-300 rounded-lg ml-10 p-2 w-20"
                  onChange={(e) => setEditedAge(e.target.value)}
                />
                세
              </div>
              <div className="border-t border-FCFCFC mt-4 ml-4 mb-1 p-2 w-[500px]"></div>
              <div className="ml-[50px] text-5C5C5C text-left font-Pretendard">
                성별:
                <label className="mr-4 ml-20">
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    checked={editedGender === "F"}
                    onChange={() => setEditedGender("F")}
                  />
                </label>
                <span>여성</span>
                <label className="ml-20">
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    checked={editedGender === "M"}
                    onChange={() => setEditedGender("M")}
                  />
                  <span>남성</span>
                </label>
              </div>
              <div className="border-t border-FCFCFC mt-4 ml-4 mb-1 p-2 w-[500px]"></div>
              <div className="ml-[50px] text-5C5C5C text-left font-Pretendard">
                주소:
                <select
                  value={editedAddress}
                  onChange={(e) => setEditedAddress(e.target.value)}
                  className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                >
                  <option value="">지역을 선택해주세요</option>
                  <option value="서울">서울</option>
                  <option value="부산">부산</option>
                  <option value="대구">대구</option>
                  <option value="인천">인천</option>
                  <option value="광주">광주</option>
                  <option value="대전">대전</option>
                  <option value="세종">세종</option>
                  <option value="경기">경기</option>
                  <option value="강원">강원</option>
                  <option value="충북">충북</option>
                  <option value="충남">충남</option>
                  <option value="전북">전북</option>
                  <option value="전남">전남</option>
                  <option value="경북">경북</option>
                  <option value="경남">경남</option>
                  <option value="제주">제주</option>
                </select>
              </div>
              <div className="border-t border-FCFCFC mt-4 ml-4 mb-1 p-2 w-[500px]"></div>
              <div className="ml-[50px] text-5C5C5C text-left font-Pretendard">
                연락처:
                <input
                  type="number"
                  value={editedContact}
                  className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                  onChange={(e) => setEditedContact(e.target.value)}
                />
              </div>
              <div className="border-t border-FCFCFC mt-4 ml-4 mb-1 p-2 w-[500px]"></div>
              <div className="ml-[50px] text-5C5C5C text-left font-Pretendard">
                이메일:
                <input
                  type="email"
                  value={editedEmail}
                  className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
              </div>
              <div className="border-t border-FCFCFC mt-4 ml-4 mb-1 p-2 w-[500px]"></div>
              <div className="ml-[50px] text-5C5C5C text-left font-Pretendard">
                비밀번호:
                <input
                  type="password"
                  value={editedPassword}
                  className="border border-gray-300 rounded-lg ml-7 p-2 w-80"
                  onChange={(e) => setEditedPassword(e.target.value)}
                />
              </div>
              <div className="border-t border-FCFCFC mt-4 ml-4 mb-1 p-2 w-[500px]"></div>
              <div className="ml-[50px] text-5C5C5C text-left font-Pretendard">
                코멘트:
                <input
                  type="text"
                  value={editedComment}
                  className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                  onChange={(e) => setEditedComment(e.target.value)}
                />
              </div>
              <div className="border-t border-FCFCFC mt-4 ml-4 mb-1 p-2 w-[500px]"></div>
              <div className="ml-[50px] text-5C5C5C text-left font-Pretendard">
              희망 시작일:
              {startTime}
              </div>
              <div className="border-t border-FCFCFC mt-4 ml-4 mb-1 p-2 w-[500px]"></div>
              <div className="ml-[50px] text-5C5C5C text-left font-Pretendard">
              희망 종료일:
              {endTime}
              </div>
            </div>
          </div>
          <div className="flex flex justify-end mr-20 mt-[50px]">
>>>>>>> yeji
            {/* 수정 버튼 */}
            <button
              onClick={handleEdit}
              className="bg-525151 text-FFD700 rounded-full font-Pretendard py-3 px-8 hover:bg-00694E transition duration-300 mr-4"
            >
              수정
            </button>
<<<<<<< HEAD

            {/* 삭제 버튼 */}
=======
>>>>>>> yeji
            <button
              onClick={handleDelete}
              className="bg-525151 text-FFD700 rounded-full font-Pretendard py-3 px-8 hover:bg-FF5252 transition duration-300"
            >
              삭제
            </button>
          </div>
<<<<<<< HEAD
          <div className="mt-10 border-t border-FCFCFC ml-16 mb-1 p-2 w-4/5"></div>
=======
          <div className="mt-10 border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
>>>>>>> yeji
          <div className="ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              나의 매칭 현황을 확인하세요
            </p>
            <p className="text-left font-Pretendard text-2xl">매칭 확인</p>
          </div>
          <div className="flex justify-end mr-20 mt-[200px]">
<<<<<<< HEAD
=======
            
>>>>>>> yeji
            <button
              onClick={back}
              className="bg-525151 text-FFD700 rounded-full font-Pretendard py-3 px-8 hover:bg-FF5252 transition duration-300"
            >
              확인 완료
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <Footer />
    </div>
    </>
  );
};

export default Applylist;
=======
      <footer className="top-[140px] w-full min-h-[170wh] relative flex items-center justify-center bg-neutral-600 ">
        <div className="w-[390px] h-[363px] relative bg-neutral-600">
          <div className="w-[181px] h-[78px] left-[105px] top-[285px] absolute text-center text-yellow-400 text-[23px] font-extrabold">
            AgeBloomers
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Applylist;
>>>>>>> yeji
