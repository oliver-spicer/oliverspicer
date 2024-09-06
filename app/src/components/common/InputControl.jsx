export const InputControl = ({
  invalid = false,
  required = true,
  name = '',
  label = '',
  helper = '',
  tag: Tag = 'input',
  ...props
}) => {
  return (
    <div className="py-3" data-invalid={invalid} {...props}>
      <label htmlFor={name}>
        <span className="font-bold">{label}</span>
        {required === true && <span className="text-red-300"> *</span>}
        <div className="mt-1">
          {<Tag id={name} name={name} {...props}></Tag>}
        </div>
        {helper !== '' && <span className="text-sm">{helper}</span>}
      </label>
    </div>
  );
};
