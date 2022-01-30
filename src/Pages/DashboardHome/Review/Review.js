import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";




const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        console.log(data)

        axios.post('https://whispering-plains-32818.herokuapp.com/ratings', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert(' Review added to Homepage Tour experience section');

                }
            })
        reset();
    }
    return (
        <div style={{ backgroundColor: 'background: linear-gradient(to right, #b3ffab, #12fff7);' }}>
            <h1>Review</h1>
            <div className="row">
                <div className="login-box  col-md-12">
                    <div className="border border d-flex justify-content-center align-items-center  ">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input {...register("image", { required: true })}
                                    placeholder="image"
                                    className="p-2 m-2 w-100" />
                                <br />
                                <input
                                    {...register("name")}

                                    placeholder="Your Place name"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <textarea {...register("Description", { required: true })}
                                    placeholder="Share your expense, transportation facilities"
                                    className="p-2 m-2 w-100" />
                                <br />

                                <input type="number" {...register("number", { required: true })} placeholder="rating"
                                    defaultValue={user.number}
                                    className="p-2 m-2 w-100"
                                />

                                <br />

                                <input type="submit" value="Submit" className="btn btn w-50 mb-2" style={{ background: `linear-gradient(to right, #b993d6, #8ca6db)` }} />
                            </form>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Review;