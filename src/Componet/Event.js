function Event() {
    const onfcs = (e) => {
        if (e.currentTarget === e.target) {
          console.log('focused self');
        } else {
          console.log('focused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus entered self');
        }
      }
    const onblr =  (e) => {
        if (e.currentTarget === e.target) {
          console.log('unfocused self');
        } else {
          console.log('unfocused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus left self');
        }
      }
    return (
      <div
        tabIndex={1}
        onFocus={onfcs}
        onBlur={onblr}
      >
        <input id="3" />
        <input id="2" />
      </div>
    );
  }
  export default Event;