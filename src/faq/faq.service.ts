type FaqParamsType = {
  id?: number;
  type?: string;
};
export class FaqService {
  getFaqs(params: FaqParamsType): string[] {
    return ['faq 1', 'faq 2'];
  }

  getFaqById(id: number): string {
    return 'faq ' + id;
  }
}
