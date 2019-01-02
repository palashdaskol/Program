create schema if not exists Family;
Alter database Family character set = utf8mb4 COLLATE = utf8mb4_unicode_ci; 
use Family;
CREATE TABLE `Family`.`Channel` (
  `Number` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `Price` INT NOT NULL,
  PRIMARY KEY (`Number`),
  UNIQUE INDEX `ChannelNumber_UNIQUE` (`Number` ASC),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC));
  
  CREATE TABLE `Family`.`Package` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Price` INT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC));
  Alter table `Family`.`Channel` add column PackageID INT;
  
ALTER TABLE `Family`.`Channel`
ADD CONSTRAINT FK_ChannelPackage
FOREIGN KEY (PackageID) REFERENCES `Family`.`Package`(ID); 
ALTER TABLE `Family`.`Channel` MODIFY PackageID INT null;
update `Family`.`Channel` set PackageID = null where PackageID = 0;
CREATE TABLE `Family`.`Constant` (
  `GSTRate` INT NOT NULL DEFAULT 18);