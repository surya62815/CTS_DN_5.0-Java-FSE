CREATE TABLE Customers (
    c_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    ROI NUMBER -- ROI -> rate of interest
);

INSERT INTO Customers (c_id, name, age, ROI)
VALUES (204, 'surya', 70, 3);

INSERT INTO Customers (c_id, name, age, ROI)
VALUES (206, 'raju', 63, 5);

INSERT INTO Customers (c_id, name, age, ROI)
VALUES (209, 'Sainag', 55, 7);

INSERT INTO Customers (c_id, name, age, ROI)
VALUES (211, 'Nikhil', 66, 4);

INSERT INTO Customers (c_id, name, age, ROI)
VALUES (232, 'ramya', 42, 9);

COMMIT;

SET SERVEROUTPUT ON;

DECLARE
    CURSOR senior_customers IS
        SELECT c_id, ROI
        FROM Customers
        WHERE age >= 65;

    v_adjustedROI NUMBER;

BEGIN
    FOR customer_record IN senior_customers LOOP   
        v_adjustedROI := customer_record.ROI - 0.5;

        UPDATE Customers
        SET ROI = v_adjustedROI
        WHERE c_id = customer_record.c_id;

        DBMS_OUTPUT.PUT_LINE('c_id: ' || customer_record.c_id || 
                             ' | New ROI: ' || v_adjustedROI);
    END LOOP;

    COMMIT;
END;
/