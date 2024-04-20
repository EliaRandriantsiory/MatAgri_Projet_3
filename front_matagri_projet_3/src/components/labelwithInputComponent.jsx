function LabelwithInput({label,handleOnChangeInputText}) {
    return ( 
        <>
          <div className="col-md-6">
            <label >{label.content}</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder={label.placeholder}
              // {label.required ==true ? required:""}
              onChange={(event) => handleOnChangeInputText(event)}
            />
          </div>
        </>
     );
}

export default LabelwithInput;