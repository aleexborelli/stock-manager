export default interface CreateUserAddressDTO {
  user_id: string;
  logradouro: string;
  numero: string;
  cidade: string;
  estado: string;
  cep: number;
}
