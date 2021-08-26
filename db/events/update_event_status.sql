update events
set lk_event_status_id = ${lkEventStatusId},
    modified_by = ${modifiedBy},
    modified_datetime = now()
where id = ${eventId};