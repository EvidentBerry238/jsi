let dataAcc = JSON.parse(localStorage.getItem("account"));
console.log("🚀 ~ file: index.js:49 ~ dataAcc:", dataAcc);

function checkEmail(email, password, type) {
  console.log(checkEmail);
  let exists = false;

  for (let i = 0; i < dataAcc.length; i++)
    if (email === dataAcc[i].email) {
      if (type === "login") {
        //neu loai la login, kiem tra ca password
        if (password === dataAcc[i].password) {
          exists = true;
        }
      } else {
        //neu loai khong phai 'login', chi can kiem tra email
        exists = true;
      }
      return exists;
    }
}

function handleRegister() {
  var email = document.getElementById("email").value;
  var pw = document.getElementById("pw").value;
  var repw = document.getElementById("repw").value;

  let emailcheck = /[@gmail.com]/g
  let numbers = /[0-9]/g
  let letters = /[a-z]/g

  if (email !== "" && pw !== "") {
    if (checkEmail(email)) {
      alert("Email already exists");
    } else {
      if (pw === repw) {
        
        if (pw.trim().length < 8) {
          alert("Mật khẩu phải có ít nhất 8 chữ")
        }
        else if(!email.trim().match(emailcheck)) {
          alert("Email không hợp lệ")
        }
        else if (!pw.trim().match(numbers)) {
          alert("Mật khẩu phải có ít nhất 1 chữ số")
        }
        else if (!pw.trim().match(letters)) {
          alert("Mật khẩu phải chứa ít nhất 1 chữ cái")
        }
        else{
          dataAcc.push({ id: dataAcc.length + 1, email: email, password: pw });
          localStorage.setItem("account", JSON.stringify(dataAcc));
          alert("Register success"); // thông báo đăng ký thành công
          window.location.href = "login.html";
        }
      } else {
        alert("Confirm Password fail"); // xác nhận password sai
      }
    }
  } else {
    alert("Please enter your email and password");
  }
}

function handleLogin() {
  event?.preventDefault();
  var email = document.getElementById("email").value;
  var pw = document.getElementById("pw").value;
  if (email !== "" && pw !== "") {
    if (checkEmail(email, pw.toString(), "login")) {
      localStorage.setItem("isLogin", true); // lưu trạng thái đăng nhập là true
      alert("Login successful"); // thông báo đăng nhập thành công
      window.location.href = "index.html";
    } else {
      alert("Account not found");
    }
  } else {
    alert("Please enter email and password");
  }
}


// let dataAccount = [
//     {
//      id:1,
//      email: 'admin@gmail.com',
//      password: '1'
//     },
//     {
//      id:2,
//      email: 'user@gmail.com',
//      password: '2'
//     }
// ]
// localStorage.setItem('account', JSON.stringify(dataAccount))



