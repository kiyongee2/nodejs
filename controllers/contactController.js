
// 연락처 목록
const getAllContacts = (req, res) => {
  res.send("Contacts Page...")
}

//연락처 추가
const createContact = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  
  if(!name || !email || !phone){
    return res.send("필수 값이 입력되지 않았습니다.");
  }
  res.send("Add Contact...");
}

// 연락처 1건 보기
const getContact = (req, res) => {
  const id = req.params.id;
  res.send(`View Page for ID: ${id}`)
}

module.exports = {
  getAllContacts,
  createContact,
  getContact,
}