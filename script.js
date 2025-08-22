function sendMail(){
    let params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };


const serviceId="service_wtq0r7p";
const templateId="template_d2vv5wb";

emailjs
.send(serviceId,templateId,params)
.then( res => {
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    console.log(res);
    alert("your message sent succesfully");
})
.catch((err)=>console.log(err));
}