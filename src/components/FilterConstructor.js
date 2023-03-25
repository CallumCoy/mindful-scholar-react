export function filterSet(scholarships, filters) {
  scholarships.forEach((scholarship) => {
    try {
      if (filters) {
        scholarship.show = name(scholarship, filters);
      } else {
        scholarship.show = true;
      }
    } catch (err) {
      console.error("filters error caught: ", scholarship.name, err);
      scholarship.show = false;
    }

    return scholarships;
  });

  return scholarships;
}

export function name(scholarship, filters) {
  console.log(
    filters.name ? scholarship.ScholarshipName.includes(filters.name) : true
  );
  const visible = filters.name
    ? scholarship.ScholarshipName.includes(filters.name)
    : true;
  return visible ? date(scholarship, filters) : false;
}

export function date(scholarship, filters) {
  const visible = filters.date
    ? scholarship.ExpirationDate < filters.date
    : true;

  return visible ? gPA(scholarship, filters) : false;
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

  return visible ? backer(scholarship, filters) : false;
}

export function backer(scholarship, filters) {
  const visible = filters.backer
    ? scholarship.Provider.includes(filters.backer)
    : true;

  return visible ? amount(scholarship, filters) : false;
}

export function amount(scholarship, filters) {
  const visible = filters.amount ? scholarship.Amount >= filters.amount : true;

  return visible ? interests(scholarship, filters) : false;
}

export function interests(scholarship, filters) {
  const visible = filters.interests
    ? scholarship.Interests.includes(filters.interests)
    : true;

  return visible ? ethnicity(scholarship, filters) : false;
}

export function ethnicity(scholarship, filters) {
  const visible = filters.ethnicity
    ? scholarship.Ethnicity.includes(filters.ethnicity)
    : true;

  return visible ? citizenship(scholarship, filters) : false;
}

export function citizenship(scholarship, filters) {
  const visible = filters.citizenship
    ? scholarship.CitizenshipStatus.includes(filters.citizenship)
    : true;

  return visible ? state(scholarship, filters) : false;
}

export function state(scholarship, filters) {
  const visible = filters.state
    ? scholarship.StateOfResidency.includes(filters.state)
    : true;

  return visible ? education(scholarship, filters) : false;
}

export function education(scholarship, filters) {
  const visible = filters.education
    ? scholarship.CollegeLevel.includes(filters.education)
    : true;

  return visible;
}
