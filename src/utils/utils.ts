export const getInitials = (name: string) => {
    const nameParts = name?.split(' ');
    const initials = nameParts?.map((part) => part.charAt(0).toUpperCase());
    return initials?.join('');
};

export const capitalizeFirstLetter = (word: string): string => {
    if (!word) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  export const checkComplete = (obj: any) => {
    for (const key in obj) {
      if (obj[key] === '') {
        return false;
      }
    }
    return true;
  }