El OUD ELMALAKI - Supabase version

تم ربط المنتجات بقاعدة بيانات Supabase حتى المنتجات التي يضيفها الأدمن تظهر للزوار من أجهزة مختلفة.

بيانات Supabase المستخدمة داخل script.js:
- Project URL: https://nfrfnebuxnalemakrvqk.supabase.co
- Publishable key: موجود داخل script.js (مفتاح Publishable وليس Secret/service_role)

جدول products المتوقع أن يحتوي على الأعمدة:
- id
- created_at (اختياري ويتم إنشاؤه تلقائيًا إذا كان DEFAULT مناسبًا)
- name_ar
- name_en
- price
- old_price
- discount
- image
- category
- gender

مهم جدًا - RLS:
لأن الموقع يعمل مباشرة من المتصفح باستخدام Publishable key، يجب أن تسمح سياسات RLS بقراءة المنتجات، وبالإضافة والحذف إذا أردت أن تعمل لوحة الأدمن كما هي.

إذا كانت سياسة القراءة موجودة بالفعل، أضف سياسات INSERT وDELETE من Supabase > Table Editor > products > RLS policies، أو استخدم SQL التالي إذا كان مناسبًا لمشروعك:

create policy "Public can insert products"
on products for insert
to anon
with check (true);

create policy "Public can delete products"
on products for delete
to anon
using (true);

ملاحظة أمنية: كلمة مرور الأدمن موجودة داخل JavaScript في النسخة الحالية، لذلك هي ليست حماية حقيقية ضد شخص يعرف كيفية فحص كود الموقع. لا تستخدم هذه الطريقة لحماية بيانات حساسة أو صلاحيات مالية.

الطلبات والسلة ما زالت محفوظة محليًا على الجهاز، والطلبات يتم إرسالها إلى واتساب كما في النسخة الأصلية.
