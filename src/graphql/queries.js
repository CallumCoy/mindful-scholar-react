/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getScholarship = /* GraphQL */ `
  query GetScholarship($id: ID!) {
    getScholarship(id: $id) {
      ScholarshipName
      ExpirationDate
      OpeningDate
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
export const listScholarships = /* GraphQL */ `
  query ListScholarships(
    $filter: ModelScholarshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScholarships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ScholarshipName
        ExpirationDate
        OpeningDate
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
      nextToken
    }
  }
`;
