import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function NuForm() {
    const {register, handleSubmit} = useForm(); // , errors

    const onSubmit = (data) => {
        console.log(data);
        axios
        .post('http://localhost:5000/user/', data)
        .then(console.log('User has been added'));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email" name="email" ref={register} />
            <input type="phone" name="phone" ref={register} />
            <input type="text" name="soundcloud" ref={register} />
            <input type="text" name="bandcamp" ref={register} />
            <input type="text" name="facebook" ref={register} />
            <input type="text" name="website" ref={register} />
            <input type="text" name="type" ref={register} />
            <input type="text" name="healthSettings" ref={register} />
            <input type="text" name="about" ref={register} />
            <input type="text" name="firstName" ref={register} />
            <input type="text" name="lastName" ref={register} />
            <input type="text" name="postalCode" ref={register} />
            <input type="text" name="favouriteStudio" ref={register} />
            <input type="text" name="skills" ref={register} />
            <input type="text" name="instruments" ref={register} />
            <input type="text" name="lookingFor" ref={register} />   
            {/* {errors.screenName && <p>User name is invalid</p>} */}
            {/* {errors.password && <p>{errors.password.message}</p>} */}
            <input type="submit" />
        </form>
    );
}