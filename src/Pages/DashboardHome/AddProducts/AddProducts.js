import axios from "axios";
import { useForm } from "react-hook-form";


const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully');

                }
            })
        reset();
    }
    return (
        <div style={{ backgroundColor: 'background: linear-gradient(to right, #b3ffab, #12fff7);' }}>

            <h3 className="text-dark fw-bolder ">ADD BLOG</h3>
            <div className="login-box w-100">
                <div className="border border d-flex justify-content-center align-items-center  ">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="name"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input {...register("image", { required: true })}
                                placeholder="image"
                                className="p-2 m-2 w-100" />
                            <br />
                            <textarea {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2 w-100" />
                            <br />




                            <input type="submit" value="Submit" className="btn btn w-50 mb-2" style={{ background: `linear-gradient(to right, #b993d6, #8ca6db)` }} />
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProducts;



