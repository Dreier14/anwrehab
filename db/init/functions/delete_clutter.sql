CREATE OR REPLACE function delete_clutter()
RETURNS boolean
LANGUAGE plpgsql
as $$
-- declare
declare totalNumberOfTables int;
-- Cursor related variables
declare tablesCursor refcursor;
declare cursorTableName varchar;
declare cursorTableSelectStatement varchar;
declare cursorTableRecordsCount int;
-- Logic related variables that would indicate whether or not clutter get's deleted.
declare totalNumberOfRecords int;
declare herokuRecordLimit int;
begin
    herokuRecordLimit := 10000 - 1000;
    totalNumberOfRecords := 0;
    OPEN  tablesCursor for SELECT relname FROM pg_stat_user_tables;
-- stored procedure body
    -- Loop through all the user defined tables, and get the total records.
    LOOP
        fetch tablesCursor into cursorTableName;
    
        exit when not found;
        
        cursorTableSelectStatement := 'select count(*) from ' || cursorTableName;
        
        EXECUTE cursorTableSelectStatement into cursorTableRecordsCount;
        
        totalNumberOfRecords := totalNumberOfRecords + cursorTableRecordsCount;
    END LOOP;
    
    close tablesCursor;
    
    -- If the total number of records greater than or equal to 9000(1000 less than heroku limit)
    -- Remove permanently deleted items that are a week old and for deleted users it when they are a month old, and events and testimonials that are a year and two years old.
    if totalNumberOfRecords >= herokuRecordLimit then
        -- Permanently delete deleted events that are over week old.
        delete from deleted_events
        where deleted_datetime <= date_trunc('month', now() - interval '7' day);
        
        -- Permanently delete deleted testimonials that are over week old.
        delete from deleted_testimonials
        where deleted_datetime <= date_trunc('month', now() - interval '7' day);
        
        -- Permanently delete deleted users that are over months old.
        delete from deleted_users
        where deleted_datetime <= date_trunc('month', now() - interval '1' month);
        
        -- Permanently delete events that are over a year old.
        delete from events
        where created_datetime <= date_trunc('month', now() - interval '1' year);
        
        -- Permanently delete testimonials that are over 2 years old.
        delete from testimonials
        where created_datetime <= date_trunc('month', now() - interval '2' year);
    end if;
    
    RETURN true;
end; $$
