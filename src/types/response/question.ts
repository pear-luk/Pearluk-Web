// question_id String   @id @db.Char(26)
//   contents    String   @db.Text
//   type        Int?     @db.TinyInt
//   secret_mode Int      @db.TinyInt
//   password    String   @db.VarChar(100)
//   user_id     String   @db.Char(26)
//   product_id  String?  @db.Char(26)
//   created_at  DateTime @default(now())
//   updated_at  DateTime @default(now()) @updatedAt
//   status      E_status @default(ACTIVE)
