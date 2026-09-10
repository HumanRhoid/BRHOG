import { z } from 'zod';

export const signupSchema = z.object({
    email: z.email('올바른 이메일 주소를 입력해주세요'),
    name: z.string()
        .min(2, '이름은 최소 2글자 이상이어야 합니다')
        .max(100, '이름은 최대 100글자까지 가능합니다')
        .regex(/^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z]+$/, '이름은 한글·영문만 사용할 수 있습니다')
});