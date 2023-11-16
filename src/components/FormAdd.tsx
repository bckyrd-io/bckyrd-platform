import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: string;
    image: FileList;
    additionalContent: string;
};

const FormAdd: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const [currentPhase, setCurrentPhase] = useState<number>(1);
    const [, setIsSubmitting] = useState<boolean>(false);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            setIsSubmitting(true);

            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("image", data.image[0]);
            formData.append("additionalContent", data.additionalContent);

            const response = await fetch("http://localhost:3001/api/submit-form", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Failed to submit form: ${response.statusText}`);
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error: any) {
            console.error("Error submitting form:", error.message);
            // Display an error message to the user
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderFormSection = () => {
        switch (currentPhase) {
            case 1:
                return (
                    <div>
                        <h2>Phase 1: Title</h2>
                        <input {...register("title", { required: true })} />
                        {errors.title && <span>This field is required</span>}
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2>Phase 2: Image</h2>
                        <label htmlFor="image" className="file-upload-label">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            {...register("image", { required: true })}
                            className="file-upload-input"
                        />
                        {errors.image && <span>This field is required</span>}
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2>Phase 3: Additional Content</h2>
                        <input {...register("additionalContent", { required: true })} />
                        {errors.additionalContent && <span>This field is required</span>}
                        <input type="submit" />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {renderFormSection()}
            {currentPhase < 3 && (
                <button type="button" onClick={() => setCurrentPhase(currentPhase + 1)}>
                    Next
                </button>
            )}
        </form>
    );
};

export default FormAdd;
