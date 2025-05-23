import React from 'react';
import {useForm} from 'react-hook-form';

const ItemsFormPage = () => {
      const {register, handleSubmit, formState:{
            errors
      }} = useForm();
      const onSubmit = handleSubmit((data) => {
            console.log(data);
      });
      return (
            <div>
                  <form onSubmit={onSubmit}>
                        <input type="text" placeholder="title" 
                        {...register("title" ,{required: true})}
                        />
                        {errors.title && <span>This field is required</span>}
                        <textarea rows="3" placeholder="Description"
                        {...register("description" ,{required: true})}></textarea>
                        {errors.description && <span>This field is required</span>}
                        <button>save</button>
                  </form>
            </div>
      );
}; 

export default ItemsFormPage;