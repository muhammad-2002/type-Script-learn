//Enums
enum RType {
  SUCCESS,
  FAILURE,
  AUTHENTCATED,
  UNAUTHINTICATE,
}
interface ApiResponse<T> {
  status: number;
  type: RType;
  data: T;
}

const response1: ApiResponse<object> = {
  status: 200,
  type: RType.UNAUTHINTICATE,
  data: {
    name: "andis",
  },
};
console.log(response1);
