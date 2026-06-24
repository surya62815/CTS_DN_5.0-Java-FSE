CREATE TABLE Customers (
    c_id NUMBER PRIMARY KEY,
    c_name VARCHAR2(100),
    balance NUMBER,
    VIP_status VARCHAR2(5)
);
/

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
/

SET SERVEROUTPUT ON;

DECLARE
    CURSOR IsVIP IS
        SELECT c_id
        FROM Customers
        WHERE balance > 10000;
BEGIN
    FOR bal_rec IN IsVIP LOOP
        UPDATE Customers
        SET VIP_status = 'TRUE'
        WHERE c_id = bal_rec.c_id;

        DBMS_OUTPUT.PUT_LINE('c_id ' || bal_rec.c_id || ' marked as VIP');
    END LOOP;

    COMMIT;
END;
/
