CREATE TABLE Loans (
    loan_id NUMBER PRIMARY KEY,
    cust_id NUMBER,
    due DATE
);
/

INSERT INTO Loans (loan_id, cust_id, due) VALUES (101, 1, SYSDATE + 10);
INSERT INTO Loans (loan_id, cust_id, due) VALUES (102, 2, SYSDATE + 40);
INSERT INTO Loans (loan_id, cust_id, due) VALUES (103, 3, SYSDATE + 25);
INSERT INTO Loans (loan_id, cust_id, due) VALUES (104, 4, SYSDATE + 5);
INSERT INTO Loans (loan_id, cust_id, due) VALUES (105, 5, SYSDATE + 60);
COMMIT;
/


SELECT * FROM Loans;
/


SET SERVEROUTPUT ON;


DECLARE
    CURSOR loan_reminder IS
        SELECT cust_id, loan_id, due
        FROM Loans
        WHERE due <= SYSDATE + 30;
BEGIN
    FOR loan_rec IN loan_reminder LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' || loan_rec.loan_id || 
            ' for Customer ' || loan_rec.cust_id || 
            ' is due on ' || TO_CHAR(loan_rec.due, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/