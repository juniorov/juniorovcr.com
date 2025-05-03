const Input = ({parentClass, type, id, placeholder, errorMessage}) => {
    return (
        <div className={parentClass}>
            <div className="form-group">
                <input
                    type={type}
                    className="form-control"
                    id={id}
                    name={id}
                    placeholder={placeholder}

                    data-error={errorMessage}
                />
                <div className="help-block with-errors"></div>
            </div>
        </div>
    );
}

export default Input;