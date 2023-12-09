// 1 js ชื่อ-นามสกุลเป็นภาษาไทย ถ้ากรอกเป็นภาษาอังกฤษหรือตัวเลขจะมีการเตือน
const fullnameInput = document.getElementById("fullname");
const errorElementFullName = document.getElementById("fullnameError");

fullnameInput.addEventListener('input', function() {
  const thaiAlphabet = /^[\u0E01-\u0E5B\s]+$/; 
  
  if (!thaiAlphabet.test(fullnameInput.value.trim()) || /[A-Za-z0-9]/.test(fullnameInput.value.trim())) {
    errorElementFullName.textContent = "กรุณากรอกชื่อและนามสกุลเป็นภาษาไทยเท่านั้น!";
    errorElementFullName.style.color = "red";
  } else {
    errorElementFullName.textContent = ""; 
  }
});
// 2 js กรอกอีเมลของมหาวิทยาลัย ที่มี@dome
const emailInput = document.getElementById("email");
const emailPattern = /^.+@dome\.tu\.ac\.th$/;
const errorElementEmail = document.getElementById("emailError");

emailInput.addEventListener("input", function() {
    if (!emailPattern.test(emailInput.value)) {
        errorElementEmail.textContent =
            "กรุณากรอกอีเมลตามแบบฟอร์มของมหาวิทยาลัย 'xxx.yyy@dome.tu.ac.th'.";
        errorElementEmail.style.color = "red";
    } else {
        errorElementEmail.textContent = "";
    }
});

/////////////////////////////////////////////
//3 js ตรวจสอบของรหัสนักศึกษาอยู่ในช่วงปี พ.ศ.59-66
//กรอกรหัสนศ. แค่10ตัวเท่านั้น ถ้าไม่ตรงตามเงื่อนไขจะมีการเตือน

  const studentIDInput = document.getElementById("studentID");
  const errorElementStudentID = document.getElementById("studentIDError");
  const studentIDPattern = /^(59|6[0-6])\d{8}$/; 

  studentIDInput.addEventListener("input", function() {
  if (!studentIDPattern.test(studentIDInput.value)) {
      errorElementStudentID.textContent = "กรุณาใส่รหัสนักศึกษา 10 ตัวที่เริ่มต้นด้วย '59' ถึง '66'";
      errorElementStudentID.style.color = "red"
    
  } else {
      errorElementStudentID.textContent = "";
  }
  
});

////////////////////////////////////////////
// 4 js รับข้อมูลมาแสดงผลด้านล่างของแบบฟอร์ม

function showFormData() {
  // เข้าถึงข้อมูลที่ผู้ใช้กรอก
  const fullname = document.getElementById('fullname').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const studentID = document.getElementById('studentID').value;
  const faculty = document.getElementById('faculty').value;
  const email = document.getElementById('email').value;
  const dmy = document.getElementById('dmy').value;
  const activities = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const label = document.querySelector(`label[for="${checkbox.id}"]`).textContent;
      activities.push(label);
    }
  });

  // สร้างข้อความที่จะแสดงผล
  const submittedInfo = `
    ชื่อ-นามสกุล: ${fullname}<br>
    เพศ: ${gender}<br>
    รหัสนักศึกษา: ${studentID}<br>
    คณะที่ศึกษา: ${faculty}<br>
    อีเมล: ${email}<br>
    วัน/เดือน/ปีเกิด: ${dmy}<br>
    กิจกรรมที่เคยเข้าร่วม: ${activities.length > 0 ? activities.join(', ') : 'ไม่ได้ร่วมกิจกรรมใด ๆ'}<br>
  `;

  // แสดงผลข้อมูลที่รวบรวมไว้ในส่วนที่ต้องการ
  const submittedInfoContainer = document.getElementById('submitted-info');
  submittedInfoContainer.innerHTML = submittedInfo;
}



  
  