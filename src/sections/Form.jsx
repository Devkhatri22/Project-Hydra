import Button from "../components/Button";
import InputField from "../components/InputField";
import { formContent } from "../constants";

const Form = () => {
  return (
    <section className="container">
      <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3a3456] to-[#211e2e] rounded-3xl object-contain p-16">
        <h1 className="md:text-4xl text-2xl font-bold text-white text-center">
          JOIN HYDRA
        </h1>
        <hr className="max-w-full h-1 mx-auto my-8 border-0 md:my-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] to-[#3a3456] via-[#8176AF] from-[#C0B7E8]" />
        <span className="mx-auto"></span>
        <p className="md:text-4xl text-2xl text-white text-center">
          Let&apos;s Build Your VR Experience
        </p>
        <center>
          <form>
            <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2">
              {formContent.map((item) => (
                <InputField key={item.name} {...item} />
              ))}
            </div>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full md:w-[76%] text-sm text-white bg-transparent rounded-3xl border border-white focus:ring-white focus:border-white my-5"
              placeholder="Write your thoughts here..."
            ></textarea>
            <Button title="SEND TO HYDRA" />
          </form>
        </center>
      </div>
    </section>
  );
};

export default Form;
