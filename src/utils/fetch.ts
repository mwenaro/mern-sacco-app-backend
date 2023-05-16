
export const postFormData = async (
  path: string,
  postData: any,
  method: string = "POST"
) => fetch(`/api/${path}`, {method,body: JSON.stringify(postData)});

export const putData= async (
  path: string,
  postData: any,
  method: string = "PUT"
) => fetch(`/api/${path}`, {method,body: JSON.stringify(postData)});

export const deleteData= async (
  path: string,
    method: string = "DELETE"
) => fetch(`/api/${path}`, {method});


export const getData = async (
  path: string) => fetch(`/api/${path}`);
 

