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