/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Scholarship } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ScholarshipCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ScholarshipName: "",
    ExpirationDate: "",
    OpeningDate: "",
    Amount: "",
    ApplicationLink: "",
    CitizenshipStatus: "",
    CollegeLevel: "",
    Description: "",
    Ethnicity: "",
    Interests: "",
    maxGPA: "",
    minGPA: "",
    Provider: "",
    StateOfResidency: "",
    TypeOfProgram: "",
  };
  const [ScholarshipName, setScholarshipName] = React.useState(
    initialValues.ScholarshipName
  );
  const [ExpirationDate, setExpirationDate] = React.useState(
    initialValues.ExpirationDate
  );
  const [OpeningDate, setOpeningDate] = React.useState(
    initialValues.OpeningDate
  );
  const [Amount, setAmount] = React.useState(initialValues.Amount);
  const [ApplicationLink, setApplicationLink] = React.useState(
    initialValues.ApplicationLink
  );
  const [CitizenshipStatus, setCitizenshipStatus] = React.useState(
    initialValues.CitizenshipStatus
  );
  const [CollegeLevel, setCollegeLevel] = React.useState(
    initialValues.CollegeLevel
  );
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Ethnicity, setEthnicity] = React.useState(initialValues.Ethnicity);
  const [Interests, setInterests] = React.useState(initialValues.Interests);
  const [maxGPA, setMaxGPA] = React.useState(initialValues.maxGPA);
  const [minGPA, setMinGPA] = React.useState(initialValues.minGPA);
  const [Provider, setProvider] = React.useState(initialValues.Provider);
  const [StateOfResidency, setStateOfResidency] = React.useState(
    initialValues.StateOfResidency
  );
  const [TypeOfProgram, setTypeOfProgram] = React.useState(
    initialValues.TypeOfProgram
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setScholarshipName(initialValues.ScholarshipName);
    setExpirationDate(initialValues.ExpirationDate);
    setOpeningDate(initialValues.OpeningDate);
    setAmount(initialValues.Amount);
    setApplicationLink(initialValues.ApplicationLink);
    setCitizenshipStatus(initialValues.CitizenshipStatus);
    setCollegeLevel(initialValues.CollegeLevel);
    setDescription(initialValues.Description);
    setEthnicity(initialValues.Ethnicity);
    setInterests(initialValues.Interests);
    setMaxGPA(initialValues.maxGPA);
    setMinGPA(initialValues.minGPA);
    setProvider(initialValues.Provider);
    setStateOfResidency(initialValues.StateOfResidency);
    setTypeOfProgram(initialValues.TypeOfProgram);
    setErrors({});
  };
  const validations = {
    ScholarshipName: [{ type: "Required" }],
    ExpirationDate: [{ type: "Required" }],
    OpeningDate: [],
    Amount: [],
    ApplicationLink: [],
    CitizenshipStatus: [],
    CollegeLevel: [],
    Description: [],
    Ethnicity: [],
    Interests: [],
    maxGPA: [],
    minGPA: [],
    Provider: [],
    StateOfResidency: [],
    TypeOfProgram: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ScholarshipName,
          ExpirationDate,
          OpeningDate,
          Amount,
          ApplicationLink,
          CitizenshipStatus,
          CollegeLevel,
          Description,
          Ethnicity,
          Interests,
          maxGPA,
          minGPA,
          Provider,
          StateOfResidency,
          TypeOfProgram,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Scholarship(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ScholarshipCreateForm")}
      {...rest}
    >
      <TextField
        label="Scholarship name"
        isRequired={true}
        isReadOnly={false}
        value={ScholarshipName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName: value,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.ScholarshipName ?? value;
          }
          if (errors.ScholarshipName?.hasError) {
            runValidationTasks("ScholarshipName", value);
          }
          setScholarshipName(value);
        }}
        onBlur={() => runValidationTasks("ScholarshipName", ScholarshipName)}
        errorMessage={errors.ScholarshipName?.errorMessage}
        hasError={errors.ScholarshipName?.hasError}
        {...getOverrideProps(overrides, "ScholarshipName")}
      ></TextField>
      <TextField
        label="Expiration date"
        isRequired={true}
        isReadOnly={false}
        value={ExpirationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate: value,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.ExpirationDate ?? value;
          }
          if (errors.ExpirationDate?.hasError) {
            runValidationTasks("ExpirationDate", value);
          }
          setExpirationDate(value);
        }}
        onBlur={() => runValidationTasks("ExpirationDate", ExpirationDate)}
        errorMessage={errors.ExpirationDate?.errorMessage}
        hasError={errors.ExpirationDate?.hasError}
        {...getOverrideProps(overrides, "ExpirationDate")}
      ></TextField>
      <TextField
        label="Opening date"
        isRequired={false}
        isReadOnly={false}
        value={OpeningDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate: value,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.OpeningDate ?? value;
          }
          if (errors.OpeningDate?.hasError) {
            runValidationTasks("OpeningDate", value);
          }
          setOpeningDate(value);
        }}
        onBlur={() => runValidationTasks("OpeningDate", OpeningDate)}
        errorMessage={errors.OpeningDate?.errorMessage}
        hasError={errors.OpeningDate?.hasError}
        {...getOverrideProps(overrides, "OpeningDate")}
      ></TextField>
      <TextField
        label="Amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Amount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount: value,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.Amount ?? value;
          }
          if (errors.Amount?.hasError) {
            runValidationTasks("Amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("Amount", Amount)}
        errorMessage={errors.Amount?.errorMessage}
        hasError={errors.Amount?.hasError}
        {...getOverrideProps(overrides, "Amount")}
      ></TextField>
      <TextField
        label="Application link"
        isRequired={false}
        isReadOnly={false}
        value={ApplicationLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink: value,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.ApplicationLink ?? value;
          }
          if (errors.ApplicationLink?.hasError) {
            runValidationTasks("ApplicationLink", value);
          }
          setApplicationLink(value);
        }}
        onBlur={() => runValidationTasks("ApplicationLink", ApplicationLink)}
        errorMessage={errors.ApplicationLink?.errorMessage}
        hasError={errors.ApplicationLink?.hasError}
        {...getOverrideProps(overrides, "ApplicationLink")}
      ></TextField>
      <TextField
        label="Citizenship status"
        isRequired={false}
        isReadOnly={false}
        value={CitizenshipStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus: value,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.CitizenshipStatus ?? value;
          }
          if (errors.CitizenshipStatus?.hasError) {
            runValidationTasks("CitizenshipStatus", value);
          }
          setCitizenshipStatus(value);
        }}
        onBlur={() =>
          runValidationTasks("CitizenshipStatus", CitizenshipStatus)
        }
        errorMessage={errors.CitizenshipStatus?.errorMessage}
        hasError={errors.CitizenshipStatus?.hasError}
        {...getOverrideProps(overrides, "CitizenshipStatus")}
      ></TextField>
      <TextField
        label="College level"
        isRequired={false}
        isReadOnly={false}
        value={CollegeLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel: value,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.CollegeLevel ?? value;
          }
          if (errors.CollegeLevel?.hasError) {
            runValidationTasks("CollegeLevel", value);
          }
          setCollegeLevel(value);
        }}
        onBlur={() => runValidationTasks("CollegeLevel", CollegeLevel)}
        errorMessage={errors.CollegeLevel?.errorMessage}
        hasError={errors.CollegeLevel?.hasError}
        {...getOverrideProps(overrides, "CollegeLevel")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description: value,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        label="Ethnicity"
        isRequired={false}
        isReadOnly={false}
        value={Ethnicity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity: value,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.Ethnicity ?? value;
          }
          if (errors.Ethnicity?.hasError) {
            runValidationTasks("Ethnicity", value);
          }
          setEthnicity(value);
        }}
        onBlur={() => runValidationTasks("Ethnicity", Ethnicity)}
        errorMessage={errors.Ethnicity?.errorMessage}
        hasError={errors.Ethnicity?.hasError}
        {...getOverrideProps(overrides, "Ethnicity")}
      ></TextField>
      <TextField
        label="Interests"
        isRequired={false}
        isReadOnly={false}
        value={Interests}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests: value,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.Interests ?? value;
          }
          if (errors.Interests?.hasError) {
            runValidationTasks("Interests", value);
          }
          setInterests(value);
        }}
        onBlur={() => runValidationTasks("Interests", Interests)}
        errorMessage={errors.Interests?.errorMessage}
        hasError={errors.Interests?.hasError}
        {...getOverrideProps(overrides, "Interests")}
      ></TextField>
      <TextField
        label="Max gpa"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxGPA}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA: value,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.maxGPA ?? value;
          }
          if (errors.maxGPA?.hasError) {
            runValidationTasks("maxGPA", value);
          }
          setMaxGPA(value);
        }}
        onBlur={() => runValidationTasks("maxGPA", maxGPA)}
        errorMessage={errors.maxGPA?.errorMessage}
        hasError={errors.maxGPA?.hasError}
        {...getOverrideProps(overrides, "maxGPA")}
      ></TextField>
      <TextField
        label="Min gpa"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minGPA}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA: value,
              Provider,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.minGPA ?? value;
          }
          if (errors.minGPA?.hasError) {
            runValidationTasks("minGPA", value);
          }
          setMinGPA(value);
        }}
        onBlur={() => runValidationTasks("minGPA", minGPA)}
        errorMessage={errors.minGPA?.errorMessage}
        hasError={errors.minGPA?.hasError}
        {...getOverrideProps(overrides, "minGPA")}
      ></TextField>
      <TextField
        label="Provider"
        isRequired={false}
        isReadOnly={false}
        value={Provider}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider: value,
              StateOfResidency,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.Provider ?? value;
          }
          if (errors.Provider?.hasError) {
            runValidationTasks("Provider", value);
          }
          setProvider(value);
        }}
        onBlur={() => runValidationTasks("Provider", Provider)}
        errorMessage={errors.Provider?.errorMessage}
        hasError={errors.Provider?.hasError}
        {...getOverrideProps(overrides, "Provider")}
      ></TextField>
      <TextField
        label="State of residency"
        isRequired={false}
        isReadOnly={false}
        value={StateOfResidency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency: value,
              TypeOfProgram,
            };
            const result = onChange(modelFields);
            value = result?.StateOfResidency ?? value;
          }
          if (errors.StateOfResidency?.hasError) {
            runValidationTasks("StateOfResidency", value);
          }
          setStateOfResidency(value);
        }}
        onBlur={() => runValidationTasks("StateOfResidency", StateOfResidency)}
        errorMessage={errors.StateOfResidency?.errorMessage}
        hasError={errors.StateOfResidency?.hasError}
        {...getOverrideProps(overrides, "StateOfResidency")}
      ></TextField>
      <TextField
        label="Type of program"
        isRequired={false}
        isReadOnly={false}
        value={TypeOfProgram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ScholarshipName,
              ExpirationDate,
              OpeningDate,
              Amount,
              ApplicationLink,
              CitizenshipStatus,
              CollegeLevel,
              Description,
              Ethnicity,
              Interests,
              maxGPA,
              minGPA,
              Provider,
              StateOfResidency,
              TypeOfProgram: value,
            };
            const result = onChange(modelFields);
            value = result?.TypeOfProgram ?? value;
          }
          if (errors.TypeOfProgram?.hasError) {
            runValidationTasks("TypeOfProgram", value);
          }
          setTypeOfProgram(value);
        }}
        onBlur={() => runValidationTasks("TypeOfProgram", TypeOfProgram)}
        errorMessage={errors.TypeOfProgram?.errorMessage}
        hasError={errors.TypeOfProgram?.hasError}
        {...getOverrideProps(overrides, "TypeOfProgram")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
