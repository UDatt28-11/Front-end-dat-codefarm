import { z } from "zod";

const productSchema = z.object({
  title: z
    .string()
    .trim()
    .min(6, { message: "Phải nhập tiêu đề lớn hơn 6 ký tự" }),
  price: z.number().min(0, { message: "Khong duoc nho hon 0" }),
  description: z.string().optional(),
});
export default productSchema;
