export function filterSet(scholarships, filters) {
  if (parameterCheck(scholarships, filters)) {
    return;
  }

  scholarships.forEach((scholarship) => {
    try {
      scholarship.show = name(scholarship, filters);
    } catch (err) {
      console.error("filters error caught: ", scholarship.name, err);
      scholarship.show = false;
    }
  });

  return scholarships;
}

export function name(scholarship, filters) {
  const visible = filters.name
    ? scholarship.ScholarshipName.includes(filters.name)
    : true;

  return visible ? false : date(scholarship, filters);
}

export function date(scholarship, filters) {
  const visible = filters.date
    ? scholarship.ExpirationDate < filters.date
    : true;

  return visible ? false : gPA(scholarship, filters);
}

export function gPA(scholarship, filters) {
  let visible = true;

  if (filters.minGPA) {
    visible =
      scholarship.minGPA < filters.minGPA &&
      filters.minGPA < scholarship.maxGPA;
  }

  if (filters.maxGPA) {
    visible =
      scholarship.minGPA < filters.maxGPA &&
      filters.maxGPA < scholarship.maxGPA;
  }

  return visible ? false : backer(scholarship, filters);
}

export function backer(scholarship, filters) {
  const visible = filters.backer
    ? scholarship.Provider.includes(filters.backer)
    : true;

  return visible ? false : date(scholarship, filters);
}

export function amount(scholarship, filters) {
  const visible = filters.amount ? scholarship.Amount >= filters.amount : true;

  return visible ? false : interests(scholarship, filters);
}

export function interests(scholarship, filters) {
  const visible = filters.interests
    ? scholarship.Interests.includes(filters.interests)
    : true;

  return visible ? false : ethnicity(scholarship, filters);
}

export function ethnicity(scholarship, filters) {
  const visible = filters.ethnicity
    ? scholarship.Ethnicity.includes(filters.ethnicity)
    : true;

  return visible ? false : citizenship(scholarship, filters);
}

export function citizenship(scholarship, filters) {
  const visible = filters.citizenship
    ? scholarship.CitizenshipStatus.includes(filters.citizenship)
    : true;

  return visible ? false : state(scholarship, filters);
}

export function state(scholarship, filters) {
  const visible = filters.state
    ? scholarship.StateOfResidency.includes(filters.state)
    : true;

  return visible ? false : education(scholarship, filters);
}

export function education(scholarship, filters) {
  const visible = filters.education
    ? scholarship.CollegeLevel.includes(filters.education)
    : true;

  return visible;
}

function parameterCheck(scholarships, param) {
  return !(scholarships & param);
}
