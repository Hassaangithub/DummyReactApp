import css from "styled-jsx/css";

export default css`
  @import url(https://fonts.googleapis.com/css?family=Oswald|Roboto);
  .loginBody {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    background-color: #fff4e6;
    overflow: hidden;
  }

  .table {
    display: table;
    width: 100%;
    height: 100%;
  }

  .tableCell {
    display: table-cell;
    vertical-align: middle;
    transition: all 0.5s;
  }

  .container {
    position: relative;
    width: 600px;
    margin: 30px auto 0;
    height: 320px;
    background-color: #854442;
    top: 50%;
    margin-top: -160px;
    transition: all 0.5s;
  }

  .btn,
  .infoBtn {
    display: block;
    border: none;
    text-align: center;
    margin: 0 auto;
    color: #fff;
    background-color: #be9b7b;
  }

  .infoBtn {
    padding: 5px 10px;
  }
  .btn:hover {
    opacity: 0.7;
  }
  .btn,
  .input {
    padding: 10px 15px;
  }
  .input {
    margin: 0 auto 15px;
    display: block;
    width: 220px;
  }
  .input:first-child {
    margin-top: 20px;
  }
  .containerInfo {
    font-size: 0;
  }
  .infoItem {
    text-align: center;
    width: 300px;
    height: 320px;
    display: inline-block;
    color: #fff;
  }
  .infoItem p {
    font-size: 20px;
    margin: 20px;
  }
  .infoItem .btn {
    background-color: transparent;
    border: 1px solid #fff;
  }
  .infoItem .tableCell {
    padding-right: 35px;
  }
  .infoItem:nth-child(2) .tableCell {
    padding-left: 35px;
    padding-right: 0;
  }
  .containerForm {
    overflow: hidden;
    position: absolute;
    left: 30px;
    top: -30px;
    width: 305px;
    padding-bottom: 20px;

    background-color: #fff;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
  }
  .containerForm .btn {
    margin-top: 30px;
  }
  .formItem {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: all 0.7s;
  }
  .formItem.signUp {
    position: absolute;
    left: -100%;
    opacity: 0;
  }
  .container.log-in .containerForm {
    left: 265px;
  }
  .container.logIn .containerForm .formItem.signUp {
    left: 0;
    opacity: 1;
  }
  .container.logIn .containerForm .formItem.logIn {
    top: -100%;
    opacity: 0;
  }
`;
