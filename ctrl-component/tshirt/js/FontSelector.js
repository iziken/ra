const FontSelector = ({fonts, selectedFont, onSelect}) => {
  if (fonts.length === 0) return null;
    return (
        <div className="font-picker">
            { fonts.map(item => {
              return(
                <div className="grid center font-item">
                  <input type="radio" name="font" value={item.name} id={item.name} onChange={event => {
                    onSelect(item)
                  }} />
                  <label htmlFor={item.name} className="grid-1">
                    <PictureFont text="abc" path={item.path} />
                  </label>
                </div>
              )
            })}
        </div>
    )
};
