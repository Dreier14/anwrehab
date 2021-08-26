INSERT INTO deleted_events
(
    SELECT 
        id, 
        description,
        event_form, 
        event_time,
        recurring_ind,
        lk_event_type_id,
        lk_event_status_id,
        therapist_id,
        now(),
        ${deletedBy}
    from events
    where id = ${eventId}
);

delete from events
where id = ${eventId};