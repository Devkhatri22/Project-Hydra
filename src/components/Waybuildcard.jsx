import Button from "./Button";

const Waybulidcard = ({image,title,description}) =>(
    <div
                    className="card shadow-lg w-80  bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3a3456] to-[#211e2e]">
                    <div className="card-body self-center text-white text-center">
                        <img src={image} alt={title} width="200px" className="card-action self-center" />
                        <h1 className="card-title mx-16">{title}</h1>
                        <p>
                            {description}
                        </p>
                        <div className="card-actions justify-center">
                            <Button title="Try Now"/>
                        </div>
                    </div>
                </div>
)

export default Waybulidcard;