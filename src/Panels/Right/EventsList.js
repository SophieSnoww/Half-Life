import './EventsList.css';

function EventsList(props) {
    let elements = [];
    
    for (let i = 0; i < props.events.length; i++) {
        let event = props.events[i];
        
        elements.push(
            <div className="events-list-item" key={i} onClick={() => props.deleteEvent(i)} >
                <div className="events-list-item-deletion-warning">Click to Delete</div>
                <div className="events-list-item-name">{event.name}</div>
                <div className="events-list-item-date">
                    <div className="events-list-item-date-string">{event.dateObject.toString()}</div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="EventsList">
            {elements}
        </div>
    );
}

export default EventsList;