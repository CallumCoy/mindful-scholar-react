/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createScholarship = /* GraphQL */ `
  mutation CreateScholarship(
    $input: CreateScholarshipInput!
    $condition: ModelScholarshipConditionInput
  ) {
    createScholarship(input: $input, condition: $condition) {
      ScholarshipName
      ExpirationDate
      Amount
      ApplicationLink
      CitizenshipStatus
      CollegeLevel
      Description
      Ethnicity
      Interests
      maxGPA
      minGPA
      Provider
      StateOfResidency
      TypeOfProgram
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateScholarship = /* GraphQL */ `
  mutation UpdateScholarship(
    $input: UpdateScholarshipInput!
    $condition: ModelScholarshipConditionInput
  ) {
    updateScholarship(input: $input, condition: $condition) {
      ScholarshipName
      ExpirationDate
      Amount
      ApplicationLink
      CitizenshipStatus
      CollegeLevel
      Description
      Ethnicity
      Interests
      maxGPA
      minGPA
      Provider
      StateOfResidency
      TypeOfProgram
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteScholarship = /* GraphQL */ `
  mutation DeleteScholarship(
    $input: DeleteScholarshipInput!
    $condition: ModelScholarshipConditionInput
  ) {
    deleteScholarship(input: $input, condition: $condition) {
      ScholarshipName
      ExpirationDate
      Amount
      ApplicationLink
      CitizenshipStatus
      CollegeLevel
      Description
      Ethnicity
      Interests
      maxGPA
      minGPA
      Provider
      StateOfResidency
      TypeOfProgram
      id
      createdAt
      updatedAt
    }
  }
`;
