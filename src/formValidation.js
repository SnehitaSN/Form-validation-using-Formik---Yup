//create a schema

const Yup = require ("yup")

 const formSchema= Yup.object().shape({
    username:Yup.string().required("Username is required").max(50),
    email:Yup.string().required("Email is required"),
    password:Yup.string().required("Password should be minimum 5 maximum 20").min(5).max(20)
})
export default formSchema
