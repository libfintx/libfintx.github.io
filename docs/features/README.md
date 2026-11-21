# Feature

The **libfintx** library supports the following features:

<br/>

## FinTS/HBCI

* HBCI version 2.2
* FinTS version 3.0
* Synchronization and dialog end (**HKSYN**, **HKEND**)
* Get accounts from the user parameter data (UPD)
* Get Balance (**HKSAL**)
* Request Transactions as MT940 (**HKKAZ**)
* Request Transactions as camt.052/053 (**HKCAZ**)
* Get securities holdings (Depotaufstellung) as MT535 (**HKWPD**)
* Transfer money (**HKCCS**)
* Transfer money at a certain time (**HKCSE**)
* Get, modify and delete scheduled transfers (**HKCSB**, **HKCSA**, **HKCSL**)
* Collective transfer money (**HKCCM**)
* Collective transfer money terminated (**HKCME**)
* Rebook money from one to another account (**HKCUM**)
* Collect money (**HKDSE**)
* Collective collect money (**HKDME**)
* Load mobile phone prepaid card (**HKPPD**)
* Submit banker's order (**HKCDE**)
* Get banker's orders (**HKCDB**)
* Modify and delete banker's orders (**HKCDN**, **HKCDL**)

### Strong customer authentication

* TAN process 2 (**HKTAN**)
* Decoupled approval in the banking app (**HKTAN#7**), with the status request parameters from HITANS#7
* chipTAN flicker code and photoTAN
* Get the names of the TAN media (**HKTAB**)

### Parameter data

* Bank parameter data (BPD) and user parameter data (UPD) are cached; choose where they are stored with `IBpdStore` and `IUpdStore`

<br/>

## EBICS

* EBICS versions **H004** and **H005**
* Initialization: **INI**, **HIA**, **HPB**
* Send Credit Transfer Initiation (**CCT**)
* Send Direct Debit Initiation (**CDD**)
* Pick up Swift daily statements (**STA**)
* Pick up camt.052/053 reports (**C52**, **C53**)
* Get the customer protocol (**PTK**)
* Suspend access (**SPR**)
* **E002** for encryption
* **X002** for authentication
* **A005** and **A006** for signatures

<br/>

## File processing

* SWIFT **MT940** account statements and **MT535** securities statements
* **camt.052** and **camt.053** reports
* SEPA credit transfers (**pain.001.001.03**, **pain.001.002.03**, **pain.001.003.03**) and direct debits (**pain.008.002.02**)

<br/>

## Platforms

* .NET 6, .NET 8 and .NET 10
* .NET Standard 2.0 for libfintx.FinTS
