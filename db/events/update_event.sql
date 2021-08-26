update events
set description = ${description},
    event_time = ${eventTime},
    lk_event_type_id = ${lkEventTypeId},
    lk_event_status_id = ${lkEventStatusId},
    modified_by = ${modifiedBy},
    modified_datetime = now()
where id = ${eventId};