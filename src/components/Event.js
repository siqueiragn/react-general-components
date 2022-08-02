import Button from "./list/Button";

function Event() {
    function alertOnClick() {
        alert(`activating first event`);
    };

    function secondAlertOnClick() {
        alert(`activating second event`);
    }
    return (
        <div>
            <Button event={alertOnClick} text="First event"/> 
            <Button event={secondAlertOnClick} text="Second event"/> 
        </div>
    )
}

export default Event;