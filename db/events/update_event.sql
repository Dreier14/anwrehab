update events
set description = ${description},
    event_time = ${eventTime},
    recurring_ind = ${recurringInd},
    lk_event_type_id = ${lkEventTypeId},
    lk_event_status_id = ${lkEventStatusId},
    therapist_id = ${therapistId},
    important_fl = ${importantFl},
    modified_by = ${modifiedBy},
    modified_datetime = now()
where id = ${eventId};