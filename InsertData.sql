USE [BlueMageParty]
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'8f0c551b-d317-4842-90ef-082ba6263682', N'Chaos')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'90e59877-54a1-448b-ba73-3270f1d8ed6d', N'Mana')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'd1494c5c-18a5-49c1-a29b-33b317f05068', N'Gaia')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'52cb8bb6-97f9-40b3-90cd-4b31ac7519b9', N'Elemental')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'e8d57254-188c-4f93-84ea-59e027015bbc', N'Light')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'954a01d2-2811-4ebe-b751-6d5dbaba87b7', N'Crystal')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'84c7d3b6-13dd-4982-bd0e-8adb7bdf1ea0', N'Aether')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'3efd851a-a2d3-4563-b1d7-c101522c8953', N'Primal')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'deb8a1f7-5491-4894-9467-d8b83e7f3b38', N'Dynamis')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'72ddfb11-ceb9-4c74-875b-e4c2e3322fe6', N'Meteor')
GO
INSERT [dbo].[DataCenters] ([Id], [Name]) VALUES (N'3f97c55d-350a-4dd7-9fcc-f29a5819e342', N'Materia')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'42c9ad7b-d9ef-4bf5-bb42-00694adecf40', N'Raiden', N'e8d57254-188c-4f93-84ea-59e027015bbc')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'fed4861d-44a9-4263-aa77-01350f79cdf7', N'Behemoth', N'3efd851a-a2d3-4563-b1d7-c101522c8953')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'e931305a-bfed-41db-9892-0d2f27145372', N'Alexander', N'd1494c5c-18a5-49c1-a29b-33b317f05068')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'6074a555-841d-4c76-871d-0f066733d432', N'Omega', N'8f0c551b-d317-4842-90ef-082ba6263682')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'713640f1-f81c-417f-95bf-10b9c9ae4c3a', N'Carbuncle', N'52cb8bb6-97f9-40b3-90cd-4b31ac7519b9')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'18f05170-18d9-4bfa-9326-12f95f574b31', N'Cactuar', N'84c7d3b6-13dd-4982-bd0e-8adb7bdf1ea0')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'4e97a5d8-8177-4b71-8519-17d9bedae39a', N'Kraken', N'deb8a1f7-5491-4894-9467-d8b83e7f3b38')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'09f208c1-1415-460b-8a52-18eb2a218ef4', N'Famfrit', N'3efd851a-a2d3-4563-b1d7-c101522c8953')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'faaf46db-7bbd-4f9d-8db5-1a4d3bdc3a2d', N'Atomos', N'52cb8bb6-97f9-40b3-90cd-4b31ac7519b9')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'87209bfc-d7a4-46c6-afb2-2224da1751dd', N'Shinryu', N'72ddfb11-ceb9-4c74-875b-e4c2e3322fe6')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'fa7b9e0f-5122-4b4a-9cc5-23eb87f0ed3f', N'Chocobo', N'90e59877-54a1-448b-ba73-3270f1d8ed6d')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'00927ecb-cb92-4c82-9807-250340c90161', N'Tiamat', N'd1494c5c-18a5-49c1-a29b-33b317f05068')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'f059eaee-b54b-426e-86c5-27c5c904dde9', N'Typhon', N'52cb8bb6-97f9-40b3-90cd-4b31ac7519b9')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'6a562fc7-e5fa-4a35-ba07-29c3855994e7', N'Maduin', N'deb8a1f7-5491-4894-9467-d8b83e7f3b38')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'4a4edcd5-7133-451d-a0f4-2b09df3f4f05', N'Seraph', N'deb8a1f7-5491-4894-9467-d8b83e7f3b38')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'aa079585-de2d-4cff-aff1-2e24b090eefe', N'Sophia', N'3f97c55d-350a-4dd7-9fcc-f29a5819e342')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'8217d337-8729-4d94-a3ee-2fc4f39c73c8', N'Cuchulainn', N'deb8a1f7-5491-4894-9467-d8b83e7f3b38')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'43266564-ad24-4720-a448-3036a59cf9f1', N'Jenova', N'84c7d3b6-13dd-4982-bd0e-8adb7bdf1ea0')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'5823adc3-c2af-48f4-9ac2-328f0b4b01f0', N'Odin', N'e8d57254-188c-4f93-84ea-59e027015bbc')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'5f60cec8-ea05-41ea-9ddc-3362d73c4ae6', N'Golem', N'deb8a1f7-5491-4894-9467-d8b83e7f3b38')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'3e1d56d5-3603-4388-a555-396027a0e03e', N'Aegis', N'52cb8bb6-97f9-40b3-90cd-4b31ac7519b9')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'1f20d2db-e916-47aa-a2ea-3b8a9dad589f', N'Belias', N'72ddfb11-ceb9-4c74-875b-e4c2e3322fe6')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'57b6818b-60e1-4a62-baf8-3bf7953fbd5b', N'Ravana', N'3f97c55d-350a-4dd7-9fcc-f29a5819e342')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'4f9e7925-f29a-473a-a68b-3bfde7c723e8', N'Excalibur', N'3efd851a-a2d3-4563-b1d7-c101522c8953')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'1b1a3b5f-dc6c-42e7-a9c3-3f81bd4971b0', N'Gungnir', N'52cb8bb6-97f9-40b3-90cd-4b31ac7519b9')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'a9ef33e4-9816-4b9a-9791-4046f86aac0e', N'Durandal', N'd1494c5c-18a5-49c1-a29b-33b317f05068')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'bb952a77-8b03-436b-80fd-41bbfe4f65c1', N'Lamia', N'3efd851a-a2d3-4563-b1d7-c101522c8953')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'3eaf6e58-7390-4182-b530-4204882de9a8', N'Adamantoise', N'84c7d3b6-13dd-4982-bd0e-8adb7bdf1ea0')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'2d591125-ce4d-436a-8bdc-452094286736', N'Phoenix', N'e8d57254-188c-4f93-84ea-59e027015bbc')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'66736229-9987-46e9-9ad6-4620b7c6403a', N'Alpha', N'e8d57254-188c-4f93-84ea-59e027015bbc')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'68153466-c001-40e5-9fc4-47d0495d1b0a', N'Louisoix', N'8f0c551b-d317-4842-90ef-082ba6263682')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'671a615f-780f-4f00-b188-47e3c3acd180', N'Tonberry', N'52cb8bb6-97f9-40b3-90cd-4b31ac7519b9')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'0ac39ea2-0028-4c72-82a6-4b31ee61c3d0', N'Yojimbo', N'72ddfb11-ceb9-4c74-875b-e4c2e3322fe6')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'1cb43f1d-8014-49c6-9152-4c111eb55b53', N'Marilith', N'deb8a1f7-5491-4894-9467-d8b83e7f3b38')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'cfd418b3-157e-446d-a2ac-4f1bc16b1410', N'Moogle', N'8f0c551b-d317-4842-90ef-082ba6263682')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'36df8d98-ea98-4e2e-8811-534ca318f473', N'Garuda', N'52cb8bb6-97f9-40b3-90cd-4b31ac7519b9')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'1057a3cd-e554-4119-9118-557f8aba5cb4', N'Asura', N'90e59877-54a1-448b-ba73-3270f1d8ed6d')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'7491485c-f985-49bb-959f-56fedf288300', N'Valefor', N'72ddfb11-ceb9-4c74-875b-e4c2e3322fe6')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'afa921a2-235c-40fd-98c3-589c55d8bb1f', N'Zodiark', N'e8d57254-188c-4f93-84ea-59e027015bbc')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'2bbbd14d-5451-4df3-b3fb-5bb42779a7bd', N'Spriggan', N'8f0c551b-d317-4842-90ef-082ba6263682')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'fdee4888-22c5-4056-8da7-5f32258333bf', N'Hyperion', N'3efd851a-a2d3-4563-b1d7-c101522c8953')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'7c3e1469-418e-43b4-8661-65db64283d70', N'Fenrir', N'd1494c5c-18a5-49c1-a29b-33b317f05068')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'8ee20559-cc20-479d-ac55-6a5fd1cb6668', N'Midgardsormr', N'84c7d3b6-13dd-4982-bd0e-8adb7bdf1ea0')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'd2421dd2-5f13-454f-b950-6c7d9d1ac259', N'Kujata', N'52cb8bb6-97f9-40b3-90cd-4b31ac7519b9')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'0d9279cb-4c51-4e83-a8e7-6d4f0f881e58', N'Ultros', N'3efd851a-a2d3-4563-b1d7-c101522c8953')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'925bcc7e-9fdb-4359-b7a7-709c0b5e6f7e', N'Mandragora', N'72ddfb11-ceb9-4c74-875b-e4c2e3322fe6')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'4c1d729b-d32e-4f2a-8890-7132f264d96a', N'Ragnarok', N'8f0c551b-d317-4842-90ef-082ba6263682')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'250ba929-5b32-4684-a62c-7284dd5c3a8e', N'Zeromus', N'72ddfb11-ceb9-4c74-875b-e4c2e3322fe6')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'230ecb02-2a7f-4069-81f4-849444331903', N'Zalera', N'954a01d2-2811-4ebe-b751-6d5dbaba87b7')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'e14877dc-e270-4a49-bcd1-85cda484f999', N'Diabolos', N'954a01d2-2811-4ebe-b751-6d5dbaba87b7')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'02e7241f-a3e7-42a4-9844-878424b17786', N'Sargatanas', N'84c7d3b6-13dd-4982-bd0e-8adb7bdf1ea0')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'156c3fec-1152-4350-a898-880f66a21959', N'Pandaemonium', N'90e59877-54a1-448b-ba73-3270f1d8ed6d')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'1fa31e27-e73c-435e-be8a-8a395fff7905', N'Siren', N'84c7d3b6-13dd-4982-bd0e-8adb7bdf1ea0')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'e531db22-57a0-4ba6-b67f-8a905c1e2626', N'Mateus', N'954a01d2-2811-4ebe-b751-6d5dbaba87b7')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'ee62945c-f952-4cdb-8cab-8bbc6490c031', N'Ixion', N'90e59877-54a1-448b-ba73-3270f1d8ed6d')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'0633152e-a58b-40cc-bf17-8c5b93ab4825', N'Leviathan', N'3efd851a-a2d3-4563-b1d7-c101522c8953')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'de27388c-8e0e-4902-8529-8fa315ed65d8', N'Gilgamesh', N'84c7d3b6-13dd-4982-bd0e-8adb7bdf1ea0')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'5ff98a69-b1ee-4452-9ee7-94e2ba05345e', N'Zurvan', N'3f97c55d-350a-4dd7-9fcc-f29a5819e342')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'98af918e-c1d6-46f7-855f-99a33c6ea52d', N'Ramuh', N'72ddfb11-ceb9-4c74-875b-e4c2e3322fe6')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'96accb7b-e86d-4afd-896f-9c74385914bd', N'Faerie', N'84c7d3b6-13dd-4982-bd0e-8adb7bdf1ea0')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'a37ba161-55b1-4f6d-9043-9f0892172452', N'Goblin', N'954a01d2-2811-4ebe-b751-6d5dbaba87b7')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'0dcb7b59-78e7-4623-93a6-a9085dc8299f', N'Bismarck', N'3f97c55d-350a-4dd7-9fcc-f29a5819e342')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'eab966da-c0d7-4dc9-b678-b25693d799fb', N'Twintania', N'e8d57254-188c-4f93-84ea-59e027015bbc')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'c558904f-9475-4e8c-9b3c-b353e915fce6', N'Ultima', N'd1494c5c-18a5-49c1-a29b-33b317f05068')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'3cb45b1d-a3b6-4de3-9a17-b3f2b3e308bf', N'Unicorn', N'72ddfb11-ceb9-4c74-875b-e4c2e3322fe6')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'2dc9ae27-e73e-4684-b57f-b677fe4bdc58', N'Brynhildr', N'954a01d2-2811-4ebe-b751-6d5dbaba87b7')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'a9cefcd1-882c-4d72-9802-b93b68cf4a1f', N'Halicarnassus', N'deb8a1f7-5491-4894-9467-d8b83e7f3b38')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'0b973e5d-ee81-4dde-99db-bcf3c393fa4e', N'Titan', N'90e59877-54a1-448b-ba73-3270f1d8ed6d')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'e4e16875-a73f-4671-9e18-bdd11def4c32', N'Anima', N'90e59877-54a1-448b-ba73-3270f1d8ed6d')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'89f9d53e-9ba1-4935-84a2-bf07fd0286b1', N'Malboro', N'954a01d2-2811-4ebe-b751-6d5dbaba87b7')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'fd291c1f-dbca-4af5-8738-bfc4db7a0e60', N'Sagittarius', N'8f0c551b-d317-4842-90ef-082ba6263682')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'578eb77d-588a-4c34-9847-bfc83dd43292', N'Hades', N'90e59877-54a1-448b-ba73-3270f1d8ed6d')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'5a545df5-fc22-497c-8361-c00107cbd9e0', N'Rafflesia', N'deb8a1f7-5491-4894-9467-d8b83e7f3b38')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'3d5f7c04-77d8-4659-91bf-c44af9dc3795', N'Coeurl', N'954a01d2-2811-4ebe-b751-6d5dbaba87b7')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'47ea2208-f891-4354-be0d-c581d6c34aa8', N'Ifrit', N'd1494c5c-18a5-49c1-a29b-33b317f05068')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'a83500b1-3c4e-4657-b48e-c961a467f33a', N'Exodus', N'3efd851a-a2d3-4563-b1d7-c101522c8953')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'7114a34c-f169-465f-9b0a-c9b3d97f95f1', N'Balmung', N'954a01d2-2811-4ebe-b751-6d5dbaba87b7')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'40f5ed7e-07b3-496f-b1f9-cfb4f57bc30e', N'Lich', N'e8d57254-188c-4f93-84ea-59e027015bbc')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'081c3ea0-86cf-41ff-8808-d9e67a3c0600', N'Sephirot', N'3f97c55d-350a-4dd7-9fcc-f29a5819e342')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'7cfb5fa4-41ff-4fa1-8fd3-e33d5e3d5ba2', N'Bahamut', N'd1494c5c-18a5-49c1-a29b-33b317f05068')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'4b78c53f-cc80-4304-a4d5-e33e7973253b', N'Phantom', N'8f0c551b-d317-4842-90ef-082ba6263682')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'f3a301ad-8159-4d82-9bc4-ea3285a73559', N'Shiva', N'e8d57254-188c-4f93-84ea-59e027015bbc')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'295a8870-d9b4-48f2-b146-ef2413e18246', N'Ridill', N'd1494c5c-18a5-49c1-a29b-33b317f05068')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'd814d562-b864-4717-844f-f90c2786459b', N'Cerberus', N'8f0c551b-d317-4842-90ef-082ba6263682')
GO
INSERT [dbo].[HomeWorlds] ([Id], [Name], [DataCenterId]) VALUES (N'd9faa618-433c-4ba6-8241-fcbdc88352f1', N'Masamune', N'90e59877-54a1-448b-ba73-3270f1d8ed6d')
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'c1965a9c-1b89-4407-5f7c-08dd67dc914c', 124, N'Being Mortal', N'Deals unaspected damage to all nearby enemies with a potency of 800 for the first enemy, and 50% less for all remaining enemies.
Shares a recast timer with **Apokalypsis**.', N'The faerie king Titania''s signature move, this spell embodies the disdain, pity, and delight that men''s fleeting lives inspire in the fae folk. By weaving layers upon layers of runes to create a deadly maelstrom of magic, you too can remind others of their mortality...until you inevitably meet your own demise.', 124, 5, N'6.45', N'https://ffxivcollect.com/images/spells/124.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'af6acbca-e136-416f-5f7d-08dd67dc914c', 123, N'Apokalypsis', N'Delivers damage over time with a potency of 140 to all enemies in a straight line before you.
**Duration:** 10s
Effect ends upon using another action or moving (including facing a different direction).
Cancels auto-attack upon execution.
Shares a recast timer with **Being Mortal**.', N'While magic is ordinarily woven with words and symbols, this spell employed by the dread creation Therion harnesses the power of emotion to beget destruction. It is said that, if one can cling to the desire for oblivion, it is possible to sustain the ruinous effect indefinitely.', 123, 5, N'6.45', N'https://ffxivcollect.com/images/spells/123.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'd6acd618-4c9d-4f4c-5f7e-08dd67dc914c', 122, N'Sea Shanty', N'Deals water damage with a potency of 500 to all nearby enemies.
**Additional Effect:** Potency increases to 1,000 during rain, showers, and thunderstorms', N'Part of the nixie''s watery repertoire, this technique sends a swirling deluge crashing over enemies─rather too rough for its original purpose of delighting children, but it makes a fine addition to the blue mage''s arsenal.', 122, 5, N'6.45', N'https://ffxivcollect.com/images/spells/122.png', N'Magic', N'Water', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'2fc185fa-1d62-4879-5f7f-08dd67dc914c', 121, N'Mortal Flame', N'Deals fire damage over time with a potency of 40.
Only one effect inflicted by this action can be active at a time.
Has no effect on targets outside of combat.
Effect ends upon target leaving combat.', N'In battle, the familiar Lugus used this technique to create a veritable conflagration. That power is now yours to wield...albeit at a greatly diminished strength. Not wishing to be responsible for burning entire cities down, the Blue Mages'' Guild opted to limit the flame''s intensity to a gentle sear.', 121, 3, N'6.45', N'https://ffxivcollect.com/images/spells/121.png', N'Magic', N'Fire', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'f9a887c1-a427-4331-5f80-08dd67dc914c', 120, N'Candy Cane', N'Deals unaspected damage to target and all enemies nearby it with a potency of 250 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect:** Lowers strength and dexterity attributes of target by 10%
**Duration:** 10s
**Additional Effect:** Restores 10% of maximum MP
Shares a recast timer with **Magic Hammer**.', N'Loosely based upon Aenc Thon''s technique, which saw him wallop foes with a candy cane, this spell sweetens any duel with a rain of confections. The Fuath leader, for one, would not be averse to mages thus spreading the love.', 120, 2, N'6.45', N'https://ffxivcollect.com/images/spells/120.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'a2f89b44-4989-4de4-5f81-08dd67dc914c', 119, N'Laser Eye', N'Deals unaspected damage to target and all enemies nearby it with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect:** 5-yalm knockback to all enemies within 8 yalms of target', N'Inspired by Eden''s Promise, this spell uses the eyes as arcane circles through which aether is channeled─a principle also seen in techniques such as Glower. So concentrated in energy is the beam, it explodes upon contact. Chirurgeon''s warning: excessive use may lead to chronic dry eyes.', 119, 3, N'6.45', N'https://ffxivcollect.com/images/spells/119.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'39e273af-f2da-4f73-5f82-08dd67dc914c', 118, N'Winged Reprobation', N'Deals physical damage to all enemies in a straight line before you with a potency of 300 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect:** Grants one stack of **Winged Reprobation** and resets this action''s recast timer
**Maximum Stacks:** 4
Execution at 3 stacks increases potency to 400 and grants one stack of **Winged Reprobation**, but recast timer will not be reset.
At maximum stacks, **Winged Reprobation** changes to **Winged Redemption**.
**Winged Redemption Effect:** Increases the potency of **Conviction Marcato**
**Duration:** 10s
This action does not share a recast timer with any other actions.', N'This imitation of the Lightwarden Innocence''s technique conjures up swords of Light that rain down from the heavens. Rumor has it Lord Vauthry used the technique to turn sin eaters into meol, which may explain why it appears to bring the caster closer to his perfection.', 118, 3, N'6.45', N'https://ffxivcollect.com/images/spells/118.png', N'Physical', N'Piercing', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'42e3698a-0c66-4419-5f83-08dd67dc914c', 117, N'Force Field', N'Grants either **Physical Vulnerability Down** or **Magic Vulnerability Down**.
**Duration:** 10s
**Physical Vulnerability Down Effect:** Reduces physical damage taken by 50%
**Magic Vulnerability Down Effect:** Reduces magic damage taken by 50%
This action does not share a recast timer with any other actions.', N'Originally employed by Sephirot, the Fiend, to render foes vulnerable to attacks, this spell has been adapted for the mage''s own protection. Due to the field''s intrinsic instability, however, it cannot simultaneously grant both physical and magical benefits, only one or the other.', 117, 3, N'6.45', N'https://ffxivcollect.com/images/spells/117.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'a79aaec8-80c1-4030-5f84-08dd67dc914c', 116, N'Conviction Marcato', N'Deals unaspected damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
Potency is increased to 440 when you are under the effect of **Winged Redemption**.', N'Learned from the forgiven obscenity, this technique unleashes a beam of Light-aligned aether at opponents. Lest the responsible mage worry, being a scaled-down recreation, the spell does not possess the potency to transform living beings into sin eaters.', 116, 3, N'6.45', N'https://ffxivcollect.com/images/spells/116.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'8228e025-2d2d-4302-5f85-08dd67dc914c', 115, N'Dimensional Shift', N'Delivers an attack to all nearby enemies dealing damage equal to 30% of their current HP.
Has no effect on enemies whose level is higher than your own.', N'Employed by Eden Prime, this technique shifts the fabric of reality to trigger a powerful aetheric surge. While it inflicts considerable damage, it demands an extended casting period so as to allow mages to raise a protective barrier over themselves.', 115, 4, N'6.45', N'https://ffxivcollect.com/images/spells/115.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'f569631a-2d04-4933-5f86-08dd67dc914c', 114, N'Divination Rune', N'Deals unaspected damage with a potency of 100 to all enemies in a cone before you.
**Additional Effect:** Restores MP', N'The language of the fae folk is composed of runes, symbols that harbor magic, and the faerie king Titania was partial to this one. When invoked, it emits an aetheric wave that resonates with the target''s magical energies, making them surpassingly easy to extract.', 114, 4, N'6.45', N'https://ffxivcollect.com/images/spells/114.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'eacd6c1b-87ce-4889-5f87-08dd67dc914c', 113, N'Ruby Dynamics', N'Deals physical damage with a potency of 220 to all enemies before you.
Shares a recast timer with **Chelonian Gate** and **The Rose of Destruction**.', N'In order to extend its claws for a near-inescapable strike, the Ruby Weapon transforms energy generated by its advanced dynamo unit. Albeit on a smaller scale, the mage recreates this technique by channeling aether into numerous razor-sharp aetherial blades.', 113, 4, N'6.45', N'https://ffxivcollect.com/images/spells/113.png', N'Physical', N'Slashing', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'f86aa691-4a03-4e7d-5f88-08dd67dc914c', 112, N'Deep Clean', N'Deals physical damage to all nearby enemies with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect:** Grants one stack of **Spick-and-span** for each enemy afflicted with **Begrimed**. The **Begrimed** effect is also removed.
**Maximum Stacks:** 6
**Spick-and-span Effect:** **Regen**
**Cure Potency:** 50
Cure potency increases up to 300 based on your accumulated stacks of **Spick-and-span**.
**Duration:** 15s
Additional stacks of **Spick-and-span** accumulated while the effect is active will not affect duration.', N'Taking a spotless page from the Seeker of Solitude, this spell summons forth a magicked broom to sweep the area clean. Each mud stain it removes serves to affirm its self-worth, and it imparts that sense of well-being to the caster.', 112, 3, N'6.45', N'https://ffxivcollect.com/images/spells/112.png', N'Physical', N'Blunt', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'bc2c332e-e92d-48a5-5f89-08dd67dc914c', 111, N'Peat Pelt', N'Deals earth damage to target and all enemies nearby it with a potency of 100 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect:** Afflicts target with **Begrimed**
**Begrimed Effect:** Earth damage over time
**Potency:** 10
**Duration:** 9s', N'Taking a filthy page from the mudman, this spell coalesces earth-aspected aether into a clump of mud, which is hurled at enemies. Those who are struck bear stubborn mud stains that diminish their self-worth, causing a lingering enervation.', 111, 2, N'6.45', N'https://ffxivcollect.com/images/spells/111.png', N'Magic', N'Earth', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'93032652-612a-473d-5f8a-08dd67dc914c', 110, N'Wild Rage', N'Deals physical damage to all nearby enemies with a potency of 500 for the first enemy, and 50% less for all remaining enemies.
Consumes 50% of your maximum HP when executed.', N'Embracing rage in the fashion of the spectral berserker allows one to unleash an unbridled wave of destruction. As many a parable will attest, however, anger is a double-edged sword; the spell consumes a great deal of energy, and the caster is advised to be wary of untimely exhaustion.', 110, 4, N'6.45', N'https://ffxivcollect.com/images/spells/110.png', N'Physical', N'Blunt', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'fcfe5687-e211-49c5-5f8b-08dd67dc914c', 109, N'Breath Of Magic', N'Deals unaspected damage over time with a potency of 120 to all enemies in a cone before you.
**Duration: **60s
Only one effect inflicted by this action can be active at a time.', N'Acquired from a species of crustacean native to the New World, this spell is executed by blending aether of multiple aspects and unleashing it in one fell blast. This has the effect of disrupting the target''s aetheric balance, thereby gradually robbing them of vigor.', 109, 3, N'6.45', N'https://ffxivcollect.com/images/spells/109.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'dc996a96-3453-4b09-5f8c-08dd67dc914c', 108, N'Rehydration', N'Restores own HP.
**Cure Potency:** 600', N'Particularly savvy armadillos are capable of healing themselves by drawing upon the moisture in the air, and by imitating this behavior, mages can enjoy the selfsame benefits─including flawless skin.', 108, 1, N'6.45', N'https://ffxivcollect.com/images/spells/108.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'9c6c7f16-bce6-40f6-5f8d-08dd67dc914c', 107, N'Schiltron', N'Counters enemies with unaspected damage every time you suffer physical damage.
**Counter Potency:** 50
**Duration:** 15s
Potency is increased to 100 when you are under the effect of **Aetheric Mimicry: Tank**.
Effect cannot be stacked with **Veil of the Whorl** or **Ice Spikes**.', N'Certain species of armadillo have learned to channel aether into their shells, thus granting them the hardness of metal. A similar stratagem allows the blue mage to reflect physical blows back upon an attacker─though unfortunately, both armadillo and man still feel the intial, teeth-rattling impact.', 107, 1, N'6.45', N'https://ffxivcollect.com/images/spells/107.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'60012432-0581-44f0-5f8e-08dd67dc914c', 106, N'Right Round', N'Deals physical damage with a potency of 110 to all nearby enemies.
**Additional Effect:** 10-yalm knockback to all enemies and party members in range
Cannot be used outside of combat or when target is suffering from certain enfeeblements.', N'This spell recreates the devastating way in which the greater armadillo swings an enormous boulder in its clawed tail as if wielding a flail. A boulder is conjured from aether and similarly swung at great speed, sending nearby foes flying.', 106, 2, N'6.45', N'https://ffxivcollect.com/images/spells/106.png', N'Physical', N'Blunt', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'4978cb08-97e2-4c90-5f8f-08dd67dc914c', 105, N'Goblin Punch', N'Deals physical damage with a potency of 120.
220 when executed in front of a target.
Potency is increased to 220 when you are under the effect of **Mighty Guard**.
320 when executed in front of a target while you are under the effect of **Mighty Guard**.', N'Favored by hobgoblins, this time-honored technique operates on the premise of “beating ''em senseless.” Blue mages strengthen the attack by channeling magic into their fists, which come to harbor even greater pummeling potential when coupled with the stones to face one''s foe head-on.', 105, 1, N'6.45', N'https://ffxivcollect.com/images/spells/105.png', N'Physical', N'Blunt', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'2629dc57-c058-4832-5f90-08dd67dc914c', 104, N'Nightbloom', N'Deals unaspected damage to all nearby enemies with a potency of 400 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Unaspected damage over time
**Potency: **75
**Duration: **60s
Shares a recast timer with **Both Ends**.', N'This extravagant technique belongs to Tsukuyomi, Lady of the Moon, whose malignant ire manifests as a field of flowers which then burst apart in a hail of deadly petals. Accept the inevitability of the grave, and the power of the nightbloom is yours to wield...', 104, 5, N'5.45', N'https://ffxivcollect.com/images/spells/104.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'960eff6e-8d0c-4ac9-5f91-08dd67dc914c', 103, N'Phantom Flurry', N'Deals physical damage over time with a potency of 200 to all enemies in a cone before you.
**Duration: **5s
Executing **Phantom Flurry** again before its effect expires deals physical damage to all enemies in a cone before you with a potency of 600 for the first enemy, and 50% less for all remaining enemies.
Effect ends upon using an action other than **Phantom Flurry** or moving (including facing a different direction).
Cancels auto-attack upon execution.', N'A technique employed by Suzaku, wherein the auspice unleashes a swift series of blurring kicks. The “phantom” half of the name is a somewhat nebulous reference to a constellation in Far Eastern astrology, the sign of which is said to bring good fortune in all matters...except that of matrimony.', 103, 5, N'5.45', N'https://ffxivcollect.com/images/spells/103.png', N'Physical', N'Blunt', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'57204e8c-ebea-4b05-5f92-08dd67dc914c', 102, N'Both Ends', N'Deals physical damage with a potency of 600 to all nearby enemies.
Shares a recast timer with **Nightbloom**.', N'This incantation seeks to emulate the supernatural might of the auspice Qitian Dasheng, with the caster leaping into the air, and spinning an elongated staff of pure aether in a whirlwind of brutal force.', 102, 5, N'5.45', N'https://ffxivcollect.com/images/spells/102.png', N'Physical', N'Blunt', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'4c90e116-1d91-4098-5f93-08dd67dc914c', 101, N'Peripheral Synthesis', N'Deals physical damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
Potency increased to 400 when target becomes afflicted with **Lightheaded**.
**Additional Effect: **Inflicts **Lightheaded**
**Duration: **5s
Repeated use of this action in a short period will reduce the additional effect''s duration, eventually rendering targets immune to **Lightheaded**.', N'Omega''s power reigned supreme within the interdimensional rift, allowing it to access a store of collected data and synthesize all manner of entities and objects─including giant, rocket-propelled fists of unyielding metal.', 101, 4, N'5.45', N'https://ffxivcollect.com/images/spells/101.png', N'Physical', N'Blunt', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'4d6331f4-bc96-4c67-5f94-08dd67dc914c', 100, N'Matra Magic', N'Deals an unaspected eightfold attack, each hit with a potency of 50.
Potency is increased to 100 when you are under the effect of **Aetheric Mimicry: DPS**.
Shares a recast timer with **Angel''s Snack** and **Dragon Force**.', N'A variety of magic employed by New World voidsent, this spell pummels the target with a barrage of incandescent orbs. Its name, likely familiar to scholars of the arcane, is said to have once encompassed the Whalaqee arts of near-death curses and converting life force into mana.', 100, 3, N'5.45', N'https://ffxivcollect.com/images/spells/100.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'36b4c37a-8a3b-412c-5f95-08dd67dc914c', 99, N'Choco Meteor', N'Deals unaspected damage to target and all enemies nearby it with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
Potency increases to 300 when partied with your personal chocobo.', N'A destructive ability employed by red chocobos wherein the dust and dirt in the area is drawn up into one solid mass, heated until it glows, then dropped on a target from on high. It is unsurprising, then, that these feathery fiends─also known as courser chocobos─are greeted with near-universal terror.', 99, 1, N'5.45', N'https://ffxivcollect.com/images/spells/99.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'a5b579bd-fafc-4683-5f96-08dd67dc914c', 98, N'Malediction Of Water', N'Deals water damage to all enemies in a straight line before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **10-yalm knockback to all enemies and party members in range
Cannot be used outside of combat or when target is suffering from certain enfeeblements.', N'This example of sai taisui geomancy sends forth a surging wall of water which sweeps along all in its path─friend or foe. One cannot be too careful when toying with maledictions.', 98, 2, N'5.45', N'https://ffxivcollect.com/images/spells/98.png', N'Magic', N'Water', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'18a477b2-e685-4c18-5f97-08dd67dc914c', 97, N'Hydro Pull', N'Deals water damage to all nearby enemies with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Draw-in', N'Commonly used amongst Kelpies, this spell generates a powerful current of water which draws in surrounding targets, with even low-flying cloudkin falling victim to its inexorable pull.', 97, 4, N'5.45', N'https://ffxivcollect.com/images/spells/97.png', N'Magic', N'Water', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'3f2fa9ef-0384-4ec1-5f98-08dd67dc914c', 96, N'Aetherial Spark', N'Deals unaspected damage with a potency of 50 to all enemies in a straight line before you.
**Additional Effect: **Unaspected damage over time
**Potency:** 50
**Duration:** 15s', N'This spell, learned from the dhruva, summons forth a cluster of luminous projectiles which inflict multiple pinpoint wounds to all in their path. The jagged edges of these tiny lacerations bleed profusely, weakening the target and causing considerable pain.', 96, 1, N'5.45', N'https://ffxivcollect.com/images/spells/96.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'35b7f409-a062-47a3-5f99-08dd67dc914c', 95, N'Dragon Force', N'Reduces damage taken by 20%.
**Duration: **15s
Increases damage reduction to 40% when you are under the effect of **Aetheric Mimicry: Tank**.
Shares a recast timer with **Angel''s Snack** and **Matra Magic**.', N'A technique said to originate from the dragons of the New World, this ability cocoons the caster in a sphere of aetherial force which serves to blunt incoming attacks. There is some debate on whether the aforementioned “dragons” are truly of dragonkind, or merely a species of “dragon-like” scalekin.', 95, 3, N'5.45', N'https://ffxivcollect.com/images/spells/95.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'a9eaed7e-a9c8-45cf-5f9a-08dd67dc914c', 94, N'Mustard Bomb', N'Deals fire damage to target and all enemies nearby it with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Enemies affected by **Lightheaded** suffer damage over time
**Potency: **50
**Duration: **15s', N'A recreation of the terrible chemical explosive employed by Omega, this spell fires a bomb on an arcing trajectory which detonates on impact with the target. The attack is known to leave behind a pungent odor, not unlike mustard.', 94, 4, N'5.45', N'https://ffxivcollect.com/images/spells/94.png', N'Magic', N'Fire', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'f56d38e6-dab6-4fd4-5f9b-08dd67dc914c', 93, N'Blaze', N'Deals ice damage to target and all enemies nearby it with a potency of 220 for the first enemy, and 50% less for all remaining enemies.', N'Contrary to expectation, the Blaze attack employed by Alte Roite manifests a swirling storm of ice. Some dismiss the spell''s name as an odd jest made by the author of the novel in which the winged serpent was first referenced, while others claim the freezing lesions it causes resemble terrible burns.', 93, 2, N'5.45', N'https://ffxivcollect.com/images/spells/93.png', N'Magic', N'Ice', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'2eb28763-692c-445e-5f9c-08dd67dc914c', 92, N'Ultravibration', N'KOs all nearby enemies afflicted with **Deep Freeze** or **Petrification**. Has no effect on enemies whose level is higher than your own, and certain others.
Shares a recast timer with **Level 5 Death**.', N'By manipulating aether to imitate the minute wingbeats of a kongamato, a caster generates an ultrasonic wave which ripples visibly through the surrounding air. The vibrations are lethal to frozen or petrified targets, causing them to shatter with dramatic force.', 92, 1, N'5.45', N'https://ffxivcollect.com/images/spells/92.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'0d62f566-1efd-4c08-5f9d-08dd67dc914c', 91, N'Basic Instinct', N'Increases movement speed by 30%, and healing potency and damage dealt by 100%. Also ignores the damage penalty inflicted by **Mighty Guard**.
Can only be used in duties intended for two or more players while playing alone, while no other party members are in the instance, or when all party members are incapacitated. Effect ends when joined by one or more party members.', N'A behavior learned from certain species of coeurl, the caster rises to the challenge of losing comrades by tapping into a feral survival instinct. When all seems lost, or when simply treading where a lone mage was not meant to tread, unrestrained ferocity is sometimes the only way to win through.', 91, 2, N'5.45', N'https://ffxivcollect.com/images/spells/91.png', N'Magic', N'None', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'9eedc900-13ce-4b83-5f9e-08dd67dc914c', 90, N'The Rose Of Destruction', N'Deals unaspected damage with a potency of 400.
**Additional Effect:** 10-yalm knockback
Shares a recast timer with **Chelonian Gate** and **Ruby Dynamics**.', N'This spell imitates the martial technique devised by Ivon Coeurlfist, which in turn mimics the “blaster” attack employed by wild coeurls. Upon casting, a ball of concentrated aether is propelled forward with sufficient force to knock back all but the most implacable opponents.', 90, 2, N'5.45', N'https://ffxivcollect.com/images/spells/90.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'03809f88-f2a4-482a-5f9f-08dd67dc914c', 89, N'Chelonian Gate', N'Summons a chelonian gate, reducing damage taken by 20%.
**Duration: **10s
**Additional Effect: **Grants **Auspicious Trance** after taking damage equal to 30% of maximum HP
**Auspicious Trance Effect: **Action changes from **Chelonian Gate** to **Divine Cataract**
**Chelonian Gate** effect ends upon using another action or moving (including facing a different direction).
**Auspicious Trance** ends upon losing the effect of **Chelonian Gate**.
Cancels auto-attack upon execution.
Shares a recast timer with **The Rose of Destruction** and **Ruby Dynamics**.

**Divine Cataract**
Deals water damage to all nearby enemies with a potency of 500 for the first enemy, and 50% less for all remaining enemies.
Potency increases to 1,000 when you are under the effect of **Aetheric Mimicry: Tank**.
Can only be executed when under the effect of **Auspicious Trance**.', N'A versatile technique utilized and perfected by Genbu, this magical barrier is formed of water-aspected aether. It works to soften incoming blows, storing energy that can later be unleashed in an explosive torrent.', 89, 4, N'5.45', N'https://ffxivcollect.com/images/spells/89.png', N'Magic', N'Water', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'f6250a86-a55a-4868-5fa0-08dd67dc914c', 88, N'Angel''s Snack', N'Restores own HP and the HP of all nearby party members.
**Cure Potency: **400
**Additional Effect: **Grants healing over time effect when you are under the effect of **Aetheric Mimicry: Healer**
**Cure Potency: **200
**Duration: **15s
Shares a recast timer with **Dragon Force** and **Matra Magic**.', N'A spell attributed to the guardian statues of the New World wherein the caster manifests a spread of aetherial treats with panacean properties. Those nourished by the feast find their wounds quickly closing─an effect which lingers when provided by a practitioner with knowledge of healing.', 88, 3, N'5.45', N'https://ffxivcollect.com/images/spells/88.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'924870c0-f893-46d7-5fa1-08dd67dc914c', 87, N'Feculent Flood', N'Deals earth damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.', N'The signature technique of Tokkapchi, this ability draws on earth-aspected aether to generate a stinging geyser of mud. Widely believed to deal additional psychological damage against opponents dressed in white.', 87, 1, N'5.45', N'https://ffxivcollect.com/images/spells/87.png', N'Magic', N'Earth', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'b6889edc-e127-4884-5fa2-08dd67dc914c', 86, N'Saintly Beam', N'Deals unaspected damage with a potency of 100 to target and all enemies nearby it.
Potency increases to 500 when used against undead enemies.', N'Cast by, of all things, a phantom train, this purifying light burns away restless spirits and consumes tainted souls. In Garlemald, where travel by machina is commonplace, the tale is told of a spectral locomotive whose passengers are the spirits of the dead...', 86, 2, N'5.45', N'https://ffxivcollect.com/images/spells/86.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'e25458f6-ea79-4bc7-5fa3-08dd67dc914c', 85, N'Stotram', N'Deals unaspected damage with a potency of 140 to all nearby enemies.
Action effect changes, restoring own HP and the HP of all nearby party members when you are under the effect of **Aetheric Mimicry: Healer**.
**Cure Potency: **300', N'A paean to love favored by Lakshmi, this spell produces an explosion of light, the effect of which varies depending on the caster''s mindset─a heart intent on harm will scorch foes caught in the blast, whilst a heart filled with mercy will mend the wounds of those held dear.', 85, 2, N'5.45', N'https://ffxivcollect.com/images/spells/85.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'944ea2f6-9c73-4a12-5fa4-08dd67dc914c', 84, N'Cold Fog', N'Grants **Cold Fog** to self.
**Duration: **5s
Effect changes to **Touch of Frost** if damage is taken.
**Touch of Frost Effect: **Action changes from **Cold Fog** to **White Death**
**Duration: **15s

**White Death**
Deals ice damage with a potency of 400.
**Additional Effect: ****Deep Freeze**
**Duration: **10s
Can only be executed while under the effect of **Touch of Frost**.', N'A mist dragon will instinctively cloak itself in a chilling fog, which allows it to freeze any aggressor foolish enough to test its defenses. Practitioners of this spell have discovered that the trick to not freezing oneself in the process is to surround the body with a pocket of warm air.', 84, 4, N'5.45', N'https://ffxivcollect.com/images/spells/84.png', N'Magic', N'Ice', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'e84e3812-2732-4205-5fa5-08dd67dc914c', 83, N'Tatami-gaeshi', N'Deals unaspected damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: ****Stun**
**Duration: **3s', N'The dojun-maru employ this ability to weave a row of phantom tatami mats, which they then flip onto an enemy with stunning force. A true master of the technique can even imbue the creation with the faint scent of tatami straw.', 83, 3, N'5.45', N'https://ffxivcollect.com/images/spells/83.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'dddcb70d-eb80-433b-5fa6-08dd67dc914c', 82, N'Tingle', N'Deals lightning damage to target and all enemies nearby it with a potency of 100 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Increases the potency of the next physical damage spell cast by 100
**Duration: **15s', N'The Namazu likely named this ability more for the pleasantly tingling current that energizes the caster, rather than the shocking bolt of devastation that smites the distant target. Devised by idle hunters who prefer to stay in one comfortable spot on the river, and strike at whatever swims into range.', 82, 2, N'5.45', N'https://ffxivcollect.com/images/spells/82.png', N'Magic', N'Lightning', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'9c7ff0d2-7309-4493-5fa7-08dd67dc914c', 81, N'Triple Trident', N'Delivers a threefold attack, each hit with a potency of 150.
This action does not share a recast timer with any other actions.', N'Originally developed by the Namazu as a spearfishing technique, this blindingly fast triple strike has proven just as effective against creatures more intent on devouring the fisher.', 81, 1, N'5.45', N'https://ffxivcollect.com/images/spells/81.png', N'Physical', N'Piercing', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'5069e2da-87e9-47a9-5fa8-08dd67dc914c', 80, N'J Kick', N'Delivers a jumping physical attack to target and all enemies nearby it with a potency of 300 for the first enemy, and 50% less for all remaining enemies.
Cannot be executed while bound.
Shares a recast timer with **Quasar**.', N'The signature move of Brute Justice, this technique involves unleashing the full force of justice, delirium unsuspected, static tuned in to reason─before falling back right in with the system, falling back to the end.', 80, 5, N'5.15', N'https://ffxivcollect.com/images/spells/80.png', N'Physical', N'Blunt', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'9c5f7061-4ae2-4c17-5fa9-08dd67dc914c', 79, N'Quasar', N'Deals unaspected damage to all nearby enemies with a potency of 300 for the first enemy, and 50% less for all remaining enemies.
Shares a recast timer with **J Kick**.', N'Calling upon a rain of aetherial stars like that delivered unto those who upset Sophia''s precious harmony, this spell leaves foes shaking from both the impact of a sky fallen and the thought of what fell fate it may portend.', 79, 5, N'5.15', N'https://ffxivcollect.com/images/spells/79.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'93d504a4-2290-4b7d-5faa-08dd67dc914c', 78, N'Surpanakha', N'Deals earth damage to all enemies in a cone before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Grants **Surpanakha''s Fury**, increasing potency of **Surpanakha** by 50%
**Duration: **3s
Can be stacked up to 3 times.
**Maximum Charges: **4
Effect is canceled upon execution of any action other than **Surpanakha**.', N'Favored by Ravana, this spell subtly manipulates earth-aspected aether to draw metallic particles from nearby mineral deposits, then propels them forward in an expansive wave to pierce foes'' flesh like shrapnel.', 78, 5, N'5.15', N'https://ffxivcollect.com/images/spells/78.png', N'Magic', N'Earth', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'fb0deea0-a42d-4d30-5fab-08dd67dc914c', 77, N'Aetheric Mimicry', N'Mirror the aetheric properties of your target, granting yourself a beneficial effect corresponding with the target''s role.
If target is a tank, grants **Aetheric Mimicry: Tank**, increasing your defense and augmenting certain blue magic spells.
If target is a DPS, grants **Aetheric Mimicry: DPS**, increasing critical hit rate and direct hit rate by 20%, as well as augmenting certain blue magic spells.
If target is a healer, grants **Aetheric Mimicry: Healer**, increasing healing potency by 20% and augmenting certain blue magic spells.
Cannot be cast on self. Effect ends upon reuse.', N'A useful little ability originating with the ghrah, Aetheric Mimicry allows the mage to match his aetherial wavelength to that of another person, granting the same benefits as their hard-won combat training.', 77, 4, N'5.15', N'https://ffxivcollect.com/images/spells/77.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'e938e293-fdc6-441e-5fac-08dd67dc914c', 76, N'Condensed Libra', N'Afflicts target with **Physical Attenuation**, **Astral Attenuation**, or **Umbral Attenuation**.
**Duration: **30s
**Physical Attenuation Effect: **Increases damage taken from physical attacks by 5%
**Astral Attenuation Effect: **Increases damage taken from fire-, wind-, and lightning-aspected attacks by 5%
**Umbral Attenuation Effect: **Increases damage taken from water-, earth-, and ice-aspected attacks by 5%
Only one of these statuses can be applied to a target at a time.', N'Invented by complete accident whilst a master mechanic attempted to manufacture an automaton that might monitor his lover''s suspected illicit activities, and now a staple mechanism of mechanoscribes, Condensed Libra allows for the rapid analysis and amplification of a foe''s weaknesses.', 76, 3, N'5.15', N'https://ffxivcollect.com/images/spells/76.png', N'Magic', N'None', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'22970852-9bf6-4065-5fad-08dd67dc914c', 75, N'Devour', N'Deals unaspected damage with a potency of 250.
**Additional Effect: **Increases maximum HP by 20%
**Duration: **15s
Increases duration to 70s when you are under the effect of **Aetheric Mimicry: Tank**.
**Additional Effect: **Restores an amount of own HP equal to damage dealt
This action does not share a recast timer with any other actions.', N'No longer merely the domain of savage beasts, this technique, when reproduced by the blue mage, involves not the devouring of rent flesh, but rather heals and invigorates its caster through the absorption of aether.', 75, 1, N'5.15', N'https://ffxivcollect.com/images/spells/75.png', N'Magic', N'None', 0, 1, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'6277c6d7-9ba8-4431-5fae-08dd67dc914c', 74, N'Reflux', N'Deals lightning damage with a potency of 220.
**Additional Effect: ****Heavy** +40%
**Duration: **10s
Ignores target''s **Heavy** resistance.', N'This technique strikes a foe with a ball of concentrated electricity─accumulated by wild elder wyverns during their passage through the clouds, but eminently reproducible through magical means─the power of which causes its body to seize as if being crushed by monumental weight.', 74, 3, N'5.15', N'https://ffxivcollect.com/images/spells/74.png', N'Magic', N'Lightning', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'a5317d9c-d67b-4749-5faf-08dd67dc914c', 73, N'Exuviation', N'Restores own HP and the HP of all nearby party members.
**Cure Potency: **50
**Additional Effect: **Removes one detrimental effect from all nearby party members
Cure potency is increased to 300 when you are under the effect of **Aetheric Mimicry: Healer**.', N'This spell enhances the body''s natural detoxification processes, stimulating organs and the growth of new tissue. Perhaps due to it having originated with wamourae, it feels much like shedding an old layer of scales.', 73, 2, N'5.15', N'https://ffxivcollect.com/images/spells/73.png', N'Magic', N'None', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'a9dd1b31-df81-427d-5fb0-08dd67dc914c', 72, N'Angel Whisper', N'Resurrects target to a weakened state.
This action does not share a recast timer with any other actions.', N'The origin of this revitalizing spell is steeped in mystery, as it requires healing aether be amplified through a familiar that appears for all the world to be a messenger from the heavens─a concept soundly at odds with Whalaqee religious beliefs.', 72, 4, N'5.15', N'https://ffxivcollect.com/images/spells/72.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'2c3befea-9033-4e5a-5fb1-08dd67dc914c', 71, N'Revenge Blast', N'Deals physical damage with a potency of 50.
Potency is increased to 500 when your HP is below 20%.', N'The Whalaqee are generally willing to pass on this close-quarter technique, which allows the mage to harness his own feelings of desperation at being driven closer to death and launch a last-ditch offensive. The name of the creature who originally possessed it, however, remains a closely guarded secret.', 71, 2, N'5.15', N'https://ffxivcollect.com/images/spells/71.png', N'Physical', N'Blunt', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'95a96d59-897c-45ef-5fb2-08dd67dc914c', 70, N'Cactguard', N'Reduces target party member''s damage taken by 5%.
**Duration: **6s
Increases damage reduction to 15% when you are under the effect of **Aetheric Mimicry: Tank**.', N'Wild sabotenders are believed to have developed this ability to channel their aether toward others as a means of protecting particularly fruitful members of their species─as survival in arid climes ever comes at a cost.', 70, 1, N'5.15', N'https://ffxivcollect.com/images/spells/70.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'4696be31-4dec-4ae5-5fb3-08dd67dc914c', 69, N'Perpetual Ray', N'Deals unaspected damage with a potency of 220.
**Additional Effect: ****Stun**
**Duration: **1s
Ignores target''s **Stun** resistance.', N'Employed to great effect by a certain godlike machine, the concentrated heat that comprises Perpetual Ray has the capacity to deaden nerve endings and sever links between mind and muscle. By directing the beam with particular finesse, the savvy mage can render a foe entirely immobile.', 69, 4, N'5.15', N'https://ffxivcollect.com/images/spells/69.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'5e246ea3-3e17-45a6-5fb4-08dd67dc914c', 68, N'Launcher', N'Delivers an attack to all nearby enemies randomly dealing 50%, 30%, 20%, or 10% of their HP.
Has no effect on enemies whose level is higher than your own.', N'This spell─particularly effective on the gullible─conjures a volley of illusory missiles, fooling foes into feeling as if they have met the singularly unpleasant fate of being fired upon by Garlean magitek and causing their bodies to react accordingly.', 68, 2, N'5.15', N'https://ffxivcollect.com/images/spells/68.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'8bc8572d-b0e8-4465-5fb5-08dd67dc914c', 67, N'Level 5 Death', N'KOs all nearby enemies.
Chance of successful attack is low.
Enemy level must be a multiple of 5. Has no effect on enemies whose level is higher than your own.
Shares a recast timer with **Ultravibration**.', N'One of several voidsent curses that rely upon the hubris that living creatures fall prey to upon reaching certain growth malmstones, this spell twists its way into a victim''s mind, causing such acute distress that the body''s organs are forced to shut down.', 67, 4, N'5.15', N'https://ffxivcollect.com/images/spells/67.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'a6774b65-cc90-4b5b-5fb6-08dd67dc914c', 66, N'Black Knight''s Tour', N'Deals unaspected damage to all enemies in a straight line before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Potency is increased to 400 when enemies are under the effect of **Slow**. The **Slow** effect is also removed.
**Additional Effect: ****Bind**
**Duration:** 20s', N'Never particularly concerned with mercy, the Holy See intended this spell to crush heretics'' spirits with a mentally destabilizing beam of aether. If the target is already suffering from physical distress, all the better.', 66, 2, N'5.15', N'https://ffxivcollect.com/images/spells/66.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'0708809d-b871-4b68-5fb7-08dd67dc914c', 65, N'White Knight''s Tour', N'Deals unaspected damage to all enemies in a straight line before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Potency is increased to 400 when enemies are bound. The **Bind** effect is also removed.
**Additional Effect: ****Slow** +20%
**Duration:** 20s', N'Developed as an efficient means for subduing heretics, this spell unleashes a concentrated wave of aether that sears and warps the flesh, leaving its target pained and stumbling─particularly if said target has already succumbed to mental torments.', 65, 2, N'5.15', N'https://ffxivcollect.com/images/spells/65.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'6816b004-aa0e-4495-5fb8-08dd67dc914c', 64, N'Whistle', N'Increases the potency of the next physical damage spell cast by 80%.
**Duration: **30s
Effect cannot be stacked with **Boost**.', N'This technique is in fact one of psychological suggestion, albeit suggestion performed on the self. When the proper pitch is attained, the body will respond by producing adrenaline, which can be used to advantage in combat─or, if one happens to be a dhalmel, in attracting a mate.', 64, 3, N'5.15', N'https://ffxivcollect.com/images/spells/64.png', N'Magic', N'None', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'ed9f7594-e437-4e6d-5fb9-08dd67dc914c', 63, N'Sonic Boom', N'Deals wind damage with a potency of 210.', N'A favored technique of the zu, who are able to perform it with a particularly vigorous flap of the wing, Sonic Boom produces a gust of wind-aspected aether so finely compressed that its lethality is oft likened unto that of a finely crafted blade.', 63, 4, N'5.15', N'https://ffxivcollect.com/images/spells/63.png', N'Magic', N'Wind', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'fba7e8f4-e546-4b64-5fba-08dd67dc914c', 62, N'Frog Legs', N'Provoke nearby enemies, placing yourself at the top of their enmity list.', N'This incantation-like song is evidently considered a toe-tapper by poroggos─and poroggos exclusively, for to all other creatures it sounds much like a frog being run over by a carriage. Brazenly chanting it without remorse, therefore, is an effective means of drawing ire when necessary.', 62, 1, N'5.15', N'https://ffxivcollect.com/images/spells/62.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'8fb0087e-7b95-4bcc-5fbb-08dd67dc914c', 61, N'Avail', N'Direct damage intended for you to another party member.
**Duration: **12s
Can only be executed when member is within 10 yalms. Does not activate with certain attacks.
This action does not share a recast timer with any other actions.', N'In nature, the queen hawk secretes a particular pheromone when threatened that encourages her adoring swarm to put itself in harm''s way in her name. The astute caster may create a similar effect by magical means─acquiring herself a “meat shield,” as it were.', 61, 1, N'5.15', N'https://ffxivcollect.com/images/spells/61.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'cac80765-f168-437a-5fbc-08dd67dc914c', 60, N'Magic Hammer', N'Deals unaspected damage to target and all enemies nearby it with a potency of 250 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Lowers intelligence and mind attributes by 10%
**Duration: **10s
**Additional Effect: **Restores 10% of maximum MP
Shares a recast timer with **Candy Cane**.', N'Memorably employed by Byblos, this technique, simply put, drops a massive metal─or, in many cases, aetherial─hammer directly upon a foe''s pate with resounding impact. Such foes understandably find their mental acuity somewhat reduced thereafter.', 60, 2, N'5.15', N'https://ffxivcollect.com/images/spells/60.png', N'Magic', N'None', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'1765f099-760e-42b1-5fbd-08dd67dc914c', 59, N'Gobskin', N'Creates a barrier around self and all nearby party members that absorbs damage equivalent to a heal of 100 potency.
**Duration: **30s
Barrier strength is increased to absorb damage equivalent to a heal of 250 potency when you are under the effect of **Aetheric Mimicry: Healer**.
Effect cannot be stacked with those of scholar''s **Galvanize** or sage''s **Eukrasian Diagnosis** and **Eukrasian Prognosis**.', N'Only select goblins are privy to this technique, developed through unscrupulous scientific experimentation conducted by the Illuminati. It allows one to weave a thin, skintight veil of aether across their entire body, handily augmenting the usual defenses.', 59, 4, N'5.15', N'https://ffxivcollect.com/images/spells/59.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'9698428b-4b3f-4f84-5fbe-08dd67dc914c', 58, N'Pom Cure', N'Restores target''s HP.
**Cure Potency: **100
Cure potency is increased to 500 when you are under the effect of **Aetheric Mimicry: Healer**.', N'This spell seems fundamentally no different from those used by the conjurers of Stillglade Fane, though upon inquiry as to its detailed workings, an anonymous moogle provided the following words of advice: “Stuff your pom with magic─you know, the sparkly kind─then go ''bwaaa''!”', 58, 3, N'5.15', N'https://ffxivcollect.com/images/spells/58.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'317baec3-1431-4615-5fbf-08dd67dc914c', 57, N'Eerie Soundwave', N'Removes one beneficial effect from all nearby enemies.', N'The empuse generates its Eerie Soundwave by rapidly vibrating parts of its body, emitting an unsettling tone that can only be described as “gods-awful.” Said tone can, however, be harnessed by the mage to disrupt certain harmonious aetherial frequencies and nullify their beneficial effects.', 57, 2, N'5.15', N'https://ffxivcollect.com/images/spells/57.png', N'Magic', N'None', 1, 1, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'4c5dc323-7db6-4903-5fc0-08dd67dc914c', 56, N'Chirp', N'Puts all nearby enemies to sleep.
**Duration: **40s
Cancels auto-attack upon execution.', N'This spell mimics the queer cry of the paissa, which is known to impart those who hear it with the answer to life, the universe, and everything─an experience to which the mind reacts by shutting down entirely, plunging its host into a deep slumber.', 56, 1, N'5.15', N'https://ffxivcollect.com/images/spells/56.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'de4f4bac-8106-443c-5fc1-08dd67dc914c', 55, N'Abyssal Transfixion', N'Deals physical damage with a potency of 220.
**Additional Effect: ****Paralysis**
**Duration: **30s', N'An arch demon specialty, Abyssal Transfixion weaves aether into a globe of blades that are then plunged inward to pierce a target in unison. This harrowing experience generally has the effect of paralyzing said target with a visceral terror, making it an invaluable addition to one''s arsenal.', 55, 4, N'5.15', N'https://ffxivcollect.com/images/spells/55.png', N'Physical', N'Piercing', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'5d399ba7-4753-44de-5fc2-08dd67dc914c', 54, N'Kaltstrahl', N'Deals physical damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.', N'To employ this technique, it is first necessary to replicate the panzer doll''s fearsome spear, which is then swung in an arc to cut foes down quicker than they can blink.', 54, 2, N'5.15', N'https://ffxivcollect.com/images/spells/54.png', N'Physical', N'Slashing', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'664d69bb-a916-4a12-5fc3-08dd67dc914c', 53, N'Electrogenesis', N'Deals lightning damage to target and all enemies nearby it with a potency of 220 for the first enemy, and 50% less for all remaining enemies.', N'This efficacious technique is, in nature, employed by the voracious sea serpent, which will spit a bubble of water that takes on the electric charge of the serpent''s own scales─giving the creature''s prey a rather nasty shock upon impact.', 53, 2, N'5.15', N'https://ffxivcollect.com/images/spells/53.png', N'Magic', N'Lightning', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'c68c5fb9-9a0a-4af7-5fc4-08dd67dc914c', 52, N'Northerlies', N'Deals ice damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Enemies affected by **Dropsy** are frozen. The **Dropsy** effect is also removed.
**Duration: **20s', N'Owing to the unique refrigerant in its saliva, the yeti is able to chill its own breath to such great extent that said gust of air rapidly freezes ambient water-aspected aether. By magically generating a similar blizzard, the mage becomes particularly effective against foes afflicted with dropsy.', 52, 4, N'5.15', N'https://ffxivcollect.com/images/spells/52.png', N'Magic', N'Ice', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'8fb3daf0-f25b-48aa-5fc5-08dd67dc914c', 51, N'Protean Wave', N'Deals water damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **15-yalm knockback', N'This technique originates with the living liquid, which coalesces about a hydrate core that allows it to dispense its own fluid in a violent flood. The magically reproduced version, correctly applied, is equally effective in sweeping away even the bulkiest of foes.', 51, 3, N'5.15', N'https://ffxivcollect.com/images/spells/51.png', N'Magic', N'Water', 1, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'799309b3-5b09-4371-5fc6-08dd67dc914c', 50, N'Alpine Draft', N'Deals wind damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.', N'So fierce as to match the gales that pierce Abalathia''s Spine, the gusting wind produced by this spell is commonly put to use by wild griffins in driving trespassers from their jealously guarded territory.', 50, 2, N'5.15', N'https://ffxivcollect.com/images/spells/50.png', N'Magic', N'Wind', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'671e2ba2-d529-4c37-5fc7-08dd67dc914c', 49, N'Veil Of The Whorl', N'Counters enemies with water damage every time you suffer damage.
**Counter Potency: **50
**Duration: **30s
Effect cannot be stacked with **Ice Spikes** or **Schiltron**.
Shares a recast timer with **Glass Dance**.', N'This fearsome magic, inspired by Leviathan, creates an aqueous film of water collected from the atmosphere. Though a veil in the sense of offering protection from outside forces, it also functions as a mirror, reflecting foes'' aether back upon them.', 49, 5, N'4.5', N'https://ffxivcollect.com/images/spells/49.png', N'Magic', N'Water', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'2ff4e350-70fd-4b60-5fc8-08dd67dc914c', 48, N'Glass Dance', N'Deals ice damage to all enemies in a wide arc to your fore and flanks with a potency of 350 for the first enemy, and 50% less for all remaining enemies.
Shares a recast timer with **Veil of the Whorl**.', N'To fully replicate this technique, beloved of Shiva, the blue mage calls forth a bow of aether from which she fires a hail of razor-sharp icicles. Those who knew the lady Ysayle believe that Glass Dance may have taken form from her memories of observing hunters in Tailfeather.', 48, 5, N'4.5', N'https://ffxivcollect.com/images/spells/48.png', N'Magic', N'Ice', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'c14efe5d-c77a-4898-5fc9-08dd67dc914c', 47, N'Shock Strike', N'Deals lightning damage to target and all enemies nearby it with a potency of 400 for the first enemy, and 50% less for all remaining enemies.
Shares a recast timer with **Mountain Buster**.', N'Shock Strike, never so imposing as when cast by Ramuh, calls down a bolt from the heavens. Though measurements are difficult to come by, its power is thought to far exceed that of levinbolts found in nature─indeed, it more closely resembles a warhammer crashing to the earth.', 47, 5, N'4.5', N'https://ffxivcollect.com/images/spells/47.png', N'Magic', N'Lightning', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'8f62a79a-b51d-4e8a-5fca-08dd67dc914c', 46, N'Mountain Buster', N'Deals physical earth damage to all enemies in a cone before you with a potency of 400 for the first enemy, and 50% less for all remaining enemies.
Shares a recast timer with **Shock Strike**.', N'In a devastating recreation of one of Titan''s most fearsome techniques, Mountain Buster strikes opponents with an upheaval of earth-aspected aether, as if the land itself were ripping free of its confines to pulverize its defilers─or any unfortunate bystanders, as it were.', 46, 5, N'4.5', N'https://ffxivcollect.com/images/spells/46.png', N'Physical', N'Blunt/Earth', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'f0ecd0a9-1fc2-4c62-5fcb-08dd67dc914c', 45, N'Eruption', N'Deals fire damage with a potency of 300 to all enemies at a designated location.
Shares a recast timer with **Feather Rain**.', N'Necessitating the skill to manipulate currents beneath the earth as Ifrit does, Eruption drives the fire within the land above ground in a burst of explosive flame, creating an effect similar to that of a volcano.', 45, 5, N'4.5', N'https://ffxivcollect.com/images/spells/45.png', N'Magic', N'Fire', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'01a6d574-03e4-4f00-5fcc-08dd67dc914c', 44, N'Feather Rain', N'Deals wind damage with a potency of 220 to all enemies at a designated location.
**Additional Effect: **Wind damage over time
**Potency: **40
**Duration: **6s
Shares a recast timer with **Eruption**.', N'Feather Rain, as swift and brutal as most of Garuda''s skills, puts the force of a gale behind a storm of sharp plumes, afflicting foes with innumerable cuts and lashes that cause lingering agony.', 44, 5, N'4.5', N'https://ffxivcollect.com/images/spells/44.png', N'Magic', N'Wind', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'59d713a1-142d-420f-5fcd-08dd67dc914c', 43, N'Peculiar Light', N'Increases magic damage taken by all nearby enemies by 5%.
**Duration: **15s
Recast timer cannot be affected by other spells. However, this action shares a recast timer with **Off-guard**.', N'A variant on a salamander specialty, Peculiar Light disperses radiance naturally emitted during spellcasting into a half-globe, clouding victims'' vision. Thus unbeknownst to them, malignant aether lurking within the rapidly reflecting beams renders them more susceptible to further aetherial assaults.', 43, 2, N'4.5', N'https://ffxivcollect.com/images/spells/39.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'c9cb585e-2fc0-455c-5fce-08dd67dc914c', 42, N'Doom', N'Inflicts **Doom** on target.
**Duration: **15s
When effect expires, the target will be KO''d.
Chance of successful attack is low. Has no effect on enemies whose level is higher than your own.', N'Oft cast by voidsent in the New World, this mortal curse merely hints that one''s time may be nigh. For particularly suggestible opponents, however, this is enough─the looming specter of death will send them leaping to their graves.', 42, 4, N'4.5', N'https://ffxivcollect.com/images/spells/34.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'1fe85ea5-4c7b-4678-5fcf-08dd67dc914c', 41, N'Mind Blast', N'Deals unaspected damage to all nearby enemies with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: ****Paralysis**
**Duration: **30s', N'Primarily used by soulflayers, though reportedly also found in Blaster''s arsenal, Mind Blast assaults nearby foes'' perceptions, tormenting them with the sensation of manifold cuts. Senses overwhelmed, victims'' bodies react as if perception were reality, leaving them wounded and paralyzed.', 41, 1, N'4.5', N'https://ffxivcollect.com/images/spells/12.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'2e0f34c2-788b-4f94-5fd0-08dd67dc914c', 40, N'Tail Screw', N'Reduces target''s HP to a single digit.
Chance of successful attack is low. Has no effect on enemies whose level is higher than your own.', N'Karlabos performs Tail Screw by collecting turbulent aether in the tip of its tail, then unleashing it at once as a violent whorl that rips foes'' lives from their bodies. This is notoriously difficult to imitate, due to the challenges inherent in attempting to control such a volatile aetherial vortex.', 40, 4, N'4.5', N'https://ffxivcollect.com/images/spells/31.png', N'Magic', N'None', 1, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'80b7bfc9-f136-47f1-5fd1-08dd67dc914c', 39, N'Moon Flute', N'Grants the effect of **Waxing Nocturne**, increasing damage dealt by 50% and movement speed by 30%.
**Duration: **15s
When effect ends, the player is afflicted with **Waning Nocturne**, preventing the use of auto-attack, weaponskills, spells, or abilities.
**Duration: **15s', N'This technique imitates a peculiar flute wrested from the grasp of a vanquished voidsent. Said creature was initially welcomed as a god by those New World peoples who worship the moon, but it soon became clear to them that the flute was the true source of its power and cruel authority.', 39, 1, N'4.5', N'https://ffxivcollect.com/images/spells/33.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'adf8c922-a7f7-4d61-5fd2-08dd67dc914c', 38, N'Fire Angon', N'Deals physical fire damage to target and all enemies nearby it with a potency of 200 for the first enemy, and 50% less for all remaining enemies.', N'In imitation of a martial technique passed down for generations by Mamool Ja tribes in the New World, this spell imbues a long-headed spear called an “angon”─or rather, an aetherial replica of the same─with fire-aspected aether and propels it across the field at enemy combatants.', 38, 3, N'4.5', N'https://ffxivcollect.com/images/spells/43.png', N'Physical', N'Piercing/Fire', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'7dab4fd6-4706-4ee1-5fd3-08dd67dc914c', 37, N'Ink Jet', N'Deals unaspected damage to all enemies in a cone before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: ****Blind**
**Duration: **30s', N'Ink Jet can be considered a more advanced form of Water Cannon─fitting, as both come courtesy of the kraken. The spell infuses aetherially concentrated water with whatever impure substances are most readily available to create and expel a synthetic “ink,” blinding opponents.', 37, 3, N'4.5', N'https://ffxivcollect.com/images/spells/40.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'9eca6495-7f5c-4cfb-5fd4-08dd67dc914c', 36, N'1000 Needles', N'Deals a fixed 1,000 points of physical damage which is shared by all enemies around you.', N'Highly famed─and feared─due to its frequent use by cactuars, 1000 Needles showers one''s surroundings with a hail of slim projectiles. Despite their magical nature, the velocity at which the blue mage''s pseudo-spines are propelled ensures that they are quite as painful as the real thing.', 36, 4, N'4.5', N'https://ffxivcollect.com/images/spells/15.png', N'Physical', N'Piercing', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'be59a1ef-4339-428f-5fd5-08dd67dc914c', 35, N'Missile', N'Deals damage equal to 50% of target''s current HP.
Chance of successful attack is low. Has no effect on enemies whose level is higher than your own.', N'A magical imitation of warmachina technology, this technique allows the user to fire a barrage of aetherial missiles. When efficacious─which, bear in mind, is not guaranteed─it sends a shock through the foe that appears to resonate more the greater their vitality.', 35, 4, N'4.5', N'https://ffxivcollect.com/images/spells/23.png', N'Magic', N'None', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'95026011-8266-4ef3-5fd6-08dd67dc914c', 34, N'The Dragon''s Voice', N'Deals lightning damage to all nearby enemies with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
Enemies within an 8-yalm radius will be unaffected.
**Additional Effect: ****Paralysis**
**Duration: **9s
**Additional Effect: **Potency is increased to 400 against most enemies afflicted with **Deep Freeze**. The **Deep Freeze** effect is also removed.', N'The blue mage''s ability to precisely direct volatile levin to form the smooth ring produced by this spell is owed to the chimera from which the technique was learned─and whose control of lightning aether was, in turn, owed to its draconic head.', 34, 2, N'4.5', N'https://ffxivcollect.com/images/spells/38.png', N'Magic', N'Lightning', 0, 1, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'd3d6829c-aed5-46da-5fd7-08dd67dc914c', 33, N'The Ram''s Voice', N'Deals ice damage to all nearby enemies with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: ****Deep Freeze**
**Duration: **12s', N'Scholars theorize that this particular spell was born of the variety of aetherial manipulation often performed by northern rams to survive the harsh climes of high elevations─but when ram became chimerical head, it began to favor offense over defense.', 33, 2, N'4.5', N'https://ffxivcollect.com/images/spells/37.png', N'Magic', N'Ice', 0, 1, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'ff905533-1646-45ac-5fd8-08dd67dc914c', 32, N'Toad Oil', N'Increases evasion by 20%.
**Duration: **180s', N'This technique covers the blue mage''s body in oil, much like a gigantoad''s slime would its own, allowing the caster to slip and slide away from foes'' attacks. Though most consider it uncouth at best, make no mistake─its devotees are few, but ardent.', 32, 3, N'4.5', N'https://ffxivcollect.com/images/spells/28.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'facaf6db-e734-44ac-5fd9-08dd67dc914c', 31, N'Sticky Tongue', N'Draws target towards caster.
**Additional Effect: ****Stun**
**Duration:** 4s
**Additional Effect:** Increased enmity', N'In nature, Sticky Tongue is employed by gigantoads, who extend said lengthy and unusually adhesive appendages to capture distant prey. The blue magic rendition utilizes a far more sanitary aetherial “tongue,” but the principle is the same.', 31, 4, N'4.5', N'https://ffxivcollect.com/images/spells/30.png', N'Physical', N'Blunt', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'd4931c08-a4cb-4153-5fda-08dd67dc914c', 30, N'Mighty Guard', N'Reduces damage taken by 40% while reducing damage dealt by 40%, increasing enmity generation, and preventing casting interruptions via damage taken.
Effect ends upon reuse.', N'Protected by only a dainty layer of scales, some Indigo Deep-dwellers'' survival has come to depend on aetherial manipulation─this technique included. By reducing the amount of aether used for offense, more becomes available for the creation of a strong─if flashy─barrier.', 30, 4, N'4.5', N'https://ffxivcollect.com/images/spells/35.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'd854677e-7a04-4c81-5fdb-08dd67dc914c', 29, N'Diamondback', N'Reduces damage taken by 90% and nullifies most knockback and draw-in effects.
Unable to move or take action for the duration of this effect.
**Duration: **10s
If used when **Waxing Nocturne** is active, its effect will transition immediately to **Waning Nocturne**.
The effect of this action cannot be ended manually.', N'Diamondback weaves earth-aspected aether into a hard mineral shield, mimicking what many describe as the “maddening” effect of shelled dragons'' carapaces. Alas, though its defensive properties are superlative, its weight makes it impossible for the caster to move while under its aegis.', 29, 4, N'4.5', N'https://ffxivcollect.com/images/spells/42.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'4c4b1a0c-753a-4d8c-5fdc-08dd67dc914c', 28, N'Bad Breath', N'Blow noxious breath on all enemies in a cone before you, inflicting **Slow** +20%, **Heavy** +40%, **Blind**, and **Paralysis**.
**Additional Effect: ****Poison**
**Potency: **20
**Additional Effect: **Damage dealt reduced 10%
**Duration: **15s
**Additional Effect: **Interrupts target', N'This spell manipulates wind- and earth-aspected aether to call forth the umbral, imbuing exhaled air with miasma. Attempts to replicate the morbol''s Bad Breath sans its inherent horrific stench have been unsuccessful, thus it retains its title as the *foulest* of blue magicks.', 28, 3, N'4.5', N'https://ffxivcollect.com/images/spells/6.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'6b0c3243-20eb-4f6f-5fdd-08dd67dc914c', 27, N'The Look', N'Deals unaspected damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Increased enmity', N'Common amongst dahaks, this technique requires using the position of one''s own eyes to anchor arcane geometries in which to concentrate aether. The user then expels the aether, propelled by ill will, in the direction of his gaze─though this tends to earn him a fair bit of ire in return.', 27, 2, N'4.5', N'https://ffxivcollect.com/images/spells/17.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'2b99a045-7927-44a4-5fde-08dd67dc914c', 26, N'4-tonze Weight', N'Drops a 4-tonze weight dealing physical damage at a designated location with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: ****Heavy** +40%
**Duration: **30s', N'Employed to great effect by Ultros, this technique crushes adversaries beneath a phantom weight. Due to reticence in the scholastic community regarding certain forms of testing, whether the weight applied feels like that of four full tonzes is a question that remains unanswered.', 26, 4, N'4.5', N'https://ffxivcollect.com/images/spells/2.png', N'Physical', N'Blunt', 0, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'46fa57e4-01f5-47cc-5fdf-08dd67dc914c', 25, N'Snort', N'Deals a 20-yalm knockback to all enemies in a cone before you.', N'Typhon''s signature technique produces gale-force winds by propelling concentrated air through the nostrils─though mages recreate the gust externally, for the sake of nasal integrity. In addition to buffeting foes backward, it appears to have a detrimental effect on its target''s mental state.', 25, 4, N'4.5', N'https://ffxivcollect.com/images/spells/1.png', N'Magic', N'Wind', 1, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'f36272d5-9803-40b1-5fe0-08dd67dc914c', 24, N'Flying Sardine', N'Deals physical damage with a potency of 10.
**Additional Effect: **Interrupts target', N'The apkallu, in the wild, violently regurgitates its latest pescatarian meal at predators as a defense mechanism. In blue magic trials, Flying Sardine has proven to be an equally effective deterrent even when the sardine in question is not entirely physical, reliably shocking adversaries into silence.', 24, 1, N'4.5', N'https://ffxivcollect.com/images/spells/41.png', N'Physical', N'Piercing', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'95e40c7a-86b5-4a55-5fe1-08dd67dc914c', 23, N'Faze', N'Stuns all enemies in a cone before you.
**Duration: **6s', N'Originally developed as a means of defense from flesh-eating beasts, this favorite of the Qiqirn tribes produces a shockwave as its user strikes together palms filled with concentrated aether, leaving foes witless.', 23, 3, N'4.5', N'https://ffxivcollect.com/images/spells/21.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'f61ca9f4-795b-4eac-5fe2-08dd67dc914c', 22, N'Transfusion', N'Restores all HP and MP of a single party member while incapacitating self.
**Additional Effect: **Inflicts **Brush with Death** on self
**Duration: **600s
Effect will not be removed upon revival or further incapacitation.
Cannot be executed while under the effect of **Brush with Death**.', N'At times used by self-sacrificing spirits of the dead roaming the New World, this technique consumes the entirety of one''s being to fully restore both the body and mind of another. Though the sacrifice required is great, the use of this spell is a deed not soon forgotten.', 22, 2, N'4.5', N'https://ffxivcollect.com/images/spells/27.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'1ea98bfd-1ee9-4cc6-5fe3-08dd67dc914c', 21, N'Self-destruct', N'Deals fire damage with a potency of 1,500 to all nearby enemies while incapacitating self.
**Additional Effect: **Potency is increased to 1,800 when you are under the effect of **Toad Oil**
**Additional Effect: **Inflicts **Brush with Death** on self
**Duration: **600s
Effect will not be removed upon revival or further incapacitation.
Cannot be executed while under the effect of **Brush with Death**.', N'Credited as the source of the “bomb” voidsent family''s name, Self-destruct, when used by blue mages, converts the entirety of its caster''s energy into fire-aspected aether to cause an explosion. The application of oil has been observed to make it more effective─though likely also more painful.', 21, 1, N'4.5', N'https://ffxivcollect.com/images/spells/26.png', N'Magic', N'Fire', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'dd7d297a-cbbf-4918-5fe4-08dd67dc914c', 20, N'Off-guard', N'Increases target''s damage taken by 5%.
**Duration: **15s
Recast timer cannot be affected by other spells. However, this action shares a recast timer with **Peculiar Light**.', N'A primitive type of curse cast by giants in the New World, this spell sunders opponents'' defenses by breaking their spirits. Pairing it with strong offensive magic allows the blue mage to weaken and strike down foe after foe without cease.', 20, 2, N'4.5', N'https://ffxivcollect.com/images/spells/29.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'747f1de1-ec23-43e3-5fe5-08dd67dc914c', 19, N'Bomb Toss', N'Deals fire damage at a designated location with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: ****Stun**
**Duration: **3s', N'This spell creates an aetherial replica of the sort of bomb preferred by goblins. Of course, goblin bombs acquire their combustive force through the use of magically enhanced gunpowder, so mimicking this effect with aether alone requires no small amount of effort, but the results are...explosive.', 19, 2, N'4.5', N'https://ffxivcollect.com/images/spells/14.png', N'Magic', N'Fire', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'09a7dba6-fd5f-4a69-5fe6-08dd67dc914c', 18, N'Acorn Bomb', N'Puts target and all enemies nearby it to sleep.
**Duration: **30s
Cancels auto-attack upon execution.', N'This technique pelts foes with seedlike aetherial orbs, which then explode to release the soporific within. Scholars believe that similar defense mechanisms were originally developed by treants and other species vulnerable to vilekin in order to prevent their boring of holes and leeching of sap.', 18, 1, N'4.5', N'https://ffxivcollect.com/images/spells/10.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'8c61a479-56f7-430a-5fe7-08dd67dc914c', 17, N'Blood Drain', N'Deals unaspected damage with a potency of 50.
**Additional Effect: **Restores MP', N'Through the draining of blood, this spell saps a foe''s aether, a portion of which is then absorbed by the caster. In nature, such habits first appeared in creatures such as bats and chigoes, who naturalists theorize developed the ability to absorb nutrients via blood over the course of centuries.', 17, 1, N'4.5', N'https://ffxivcollect.com/images/spells/13.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'33839aa8-2c82-4fbc-5fe8-08dd67dc914c', 16, N'Ice Spikes', N'Counters enemies with ice damage every time you suffer physical damage.
**Counter Potency: **40
**Duration: **15s
Effect cannot be stacked with **Veil of the Whorl** or **Schiltron**.
**Additional Effect: **50% chance that when you are struck, the striker will be afflicted with **Slow** +20%
**Duration: **15s', N'Favored by certain types of voidsent, this spell─technically a curse, cast upon oneself─converts the malice of attackers into aetherial spikes of ice, impaling them each time they strike. The more furious their flurries, the more pain they cause themselves─poetic justice, one might say.', 16, 1, N'4.5', N'https://ffxivcollect.com/images/spells/36.png', N'Magic', N'Ice', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'4aeabbf8-e5da-4aec-5fe9-08dd67dc914c', 15, N'Sharpened Knife', N'Deals physical damage with a potency of 220.
**Additional Effect: **Potency is increased to 450 when target is stunned', N'At this point, tonberries'' predilection for sharpened knives is well known. By manipulating aether to harness feelings of resentment, one hones a keener blade for driving into the heart of the enemy. Naturally, being beset by this attack while unable to move is a uniquely harrowing experience.', 15, 4, N'4.5', N'https://ffxivcollect.com/images/spells/18.png', N'Physical', N'Slashing', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'120e3769-c827-43a7-5fea-08dd67dc914c', 14, N'Level 5 Petrify', N'Petrifies all enemies in a cone before you.
**Duration: **20s
Chance of successful attack is low.
Enemy level must be a multiple of 5. Has no effect on enemies whose level is higher than your own.', N'This curse, commonly used by ahrimans and similar voidsent, takes advantage of the hubris that living creatures tend to fall prey to upon reaching certain malmstones in development, targeting mental weaknesses to give foes a paralyzing reminder of their own fallibility.', 14, 2, N'4.5', N'https://ffxivcollect.com/images/spells/32.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'c9c72090-a7f0-48b2-5feb-08dd67dc914c', 13, N'White Wind', N'Restores own HP and the HP of all nearby party members by an amount equal to your current HP.', N'White Wind imbues a localized current of air with purified aether, distributing its curative effects throughout the vicinity. Though powerful for such a simple spell, the purification of sufficient aether requires significant magical exertion on the part of the caster, and thus should be used sparingly.', 13, 3, N'4.5', N'https://ffxivcollect.com/images/spells/24.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'b7a42fa1-57ec-4433-5fec-08dd67dc914c', 12, N'Bristle', N'Increases the potency of the next spell cast by 50%.
**Duration: **30s
Effect cannot be stacked with **Harmonized**.', N'Instinctive to beastkin, Bristle channels sheer animalistic rage into heightened spiritual and physical power. The blue mage will find that she can adapt this technique to increase her spells'' potency.', 12, 2, N'4.5', N'https://ffxivcollect.com/images/spells/11.png', N'Magic', N'None', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'8966ce8e-47c5-485b-5fed-08dd67dc914c', 11, N'Plaincracker', N'Deals earth damage to all nearby enemies with a potency of 220 for the first enemy, and 50% less for all remaining enemies.', N'Just like that all-too-well-known fixture in the arsenals of many earthy soulkin, this technique creates a localized quake around the caster. According to legend, the earth itself will appear to shatter under a true master of the spell.', 11, 2, N'4.5', N'https://ffxivcollect.com/images/spells/9.png', N'Magic', N'Earth', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'a84a0231-6fe3-4b45-5fee-08dd67dc914c', 10, N'Glower', N'Deals lightning damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: ****Paralysis**
**Duration: **6s', N'Perhaps best known as the unsettling hallmark of the cyclops, Glower involves funneling aether through the eyes as if they were arcane circles─much like its sister spell, The Look. Its highly concentrated aether strikes foes like a levinbolt, leaving their skin singed and muscles seizing.', 10, 4, N'4.5', N'https://ffxivcollect.com/images/spells/22.png', N'Magic', N'Lightning', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'f0993f6e-edaa-4832-5fef-08dd67dc914c', 9, N'Song Of Torment', N'Deals unaspected damage with a potency of 50.
**Additional Effect: **Unaspected damage over time
**Potency: **50
**Duration: **30s', N'Favored by sirens, the Song of Torment carries in its melody a malicious enchantment. It ensnares the listener''s spirit, inducing phantom pain that soon becomes physical as the body struggles to process the mind''s trauma.', 9, 2, N'4.5', N'https://ffxivcollect.com/images/spells/4.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'4dddc8a9-211c-498f-5ff0-08dd67dc914c', 8, N'Final Sting', N'Deals physical damage with a potency of 2,000 while incapacitating self.
**Additional Effect: **Inflicts **Brush with Death** on self
**Duration: **600s
Effect will not be removed upon revival or further incapacitation.
Cannot be executed while under the effect of **Brush with Death**.', N'A desperate mage''s last resort, this technique converts all of the user''s life force to an aetherial poison that is then injected into a single adversary. Suffice it to say that, as with the physical sting of the wespe, it should not be relied upon in but the most dire of circumstances.', 8, 2, N'4.5', N'https://ffxivcollect.com/images/spells/25.png', N'Physical', N'Piercing', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'2ec587ca-4807-42b9-5ff1-08dd67dc914c', 7, N'Loom', N'Move quickly to the specified location.
Cannot be executed while bound.', N'To utilize this simple teleportation spell, casters must create an aetherial current upon which to travel between their location and the desired position. Though this is only effective over short distances, it is nevertheless an invaluable tool in the event that one needs to beat a hasty retreat.', 7, 1, N'4.5', N'https://ffxivcollect.com/images/spells/19.png', N'Magic', N'None', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'75f127f2-162a-4cd8-5ff2-08dd67dc914c', 6, N'High Voltage', N'Deals lightning damage to all nearby enemies with a potency of 180 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: ****Paralysis**
**Duration: **15s
**Additional Effect: **Potency increased to 220 when target is afflicted with **Dropsy**
**Additional Effect: **Duration of **Paralysis** is increased to 30 seconds when target is afflicted with **Dropsy**', N'An industrial form of machina-based aetherial manipulation developed and adapted by the Allagan Empire. Through the compression of ambient lightning-aspected aether, the caster (or casting machina) floods the vicinity with highly charged arcs of electricity.', 6, 4, N'4.5', N'https://ffxivcollect.com/images/spells/5.png', N'Magic', N'Lightning', 1, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'2f7749cb-2b3c-43e5-5ff3-08dd67dc914c', 5, N'Drill Cannons', N'Deals physical damage to all enemies in a straight line before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Potency is increased to 600 when target is afflicted with **Petrification**. The **Petrification** effect is also removed.', N'This technique mimics the Drill Cannons of machina by winding aetherial currents until they resemble rapidly spinning projectiles. Like the physical drills upon which they are patterned, these projectiles excel at penetrating stone.', 5, 2, N'4.5', N'https://ffxivcollect.com/images/spells/16.png', N'Physical', N'Piercing', 1, 0, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'df623158-56ca-4ea6-5ff4-08dd67dc914c', 4, N'Flying Frenzy', N'Delivers a jumping physical attack to target and all enemies nearby it with a potency of 150 for the first enemy, and 50% less for all remaining enemies.
Cannot be executed while bound.', N'Replicating this technique requires magically altering one''s own state of mind to mimic that of a zu. The flying strike that results surpasses normal physical limitations, but requires dispensing with caution in favor of an all-consuming rage─the sensible mage will shield herself with aether first.', 4, 3, N'4.5', N'https://ffxivcollect.com/images/spells/7.png', N'Physical', N'Blunt', 0, 1, 0)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'ec19e25a-567d-4e79-5ff5-08dd67dc914c', 3, N'Aqua Breath', N'Deals water damage to all enemies in a cone before you with a potency of 140 for the first enemy, and 50% less for all remaining enemies.
**Additional Effect: **Inflicts **Dropsy**, dealing water damage over time
**Potency: **20
**Duration: **12s', N'The most quintessential of water-aspected blue magicks. A competent mage will not only use its bubbles to smother nearby enemies, but also incorporate poisons, sealing the fates of any survivors.', 3, 4, N'4.5', N'https://ffxivcollect.com/images/spells/8.png', N'Magic', N'Water', 1, 0, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'956128d8-8887-440c-5ff6-08dd67dc914c', 2, N'Flame Thrower', N'Deals fire damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.', N'As with thaumaturgical fire spells, the jet of flame produced by this technique manifests from a burst of fire-aspected aether. Certain weapons produce similar effects; however, this is not through aetherial manipulation, but rather the copious use of highly flammable liquid.', 2, 4, N'4.5', N'https://ffxivcollect.com/images/spells/20.png', N'Magic', N'Fire', 0, 1, 1)
GO
INSERT [dbo].[Spells] ([Id], [Number], [Name], [Description], [Tooltip], [Order], [Rank], [Patch], [Icon], [TypeName], [AspectName], [IsSolo], [IsLightParty], [IsFullParty]) VALUES (N'c91ff297-8295-48f9-5ff7-08dd67dc914c', 1, N'Water Cannon', N'Deals water damage with a potency of 200.', N'This spell, easily mastered via defeat of a kraken, fires a concentrated burst of water at one''s opponent. As the liquid itself is conjured by manipulating aether to condense moisture in the air, the technique remains effective regardless of whether or not its caster has access to a body of water.', 1, 1, N'4.5', N'https://ffxivcollect.com/images/spells/3.png', N'Magic', N'Water', 1, 0, 0)
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'70362292-2f25-45fe-331e-08dd67dc915d', N'c1965a9c-1b89-4407-5f7c-08dd67dc914c', N'Titania', N'The Dancing Plague')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'6ce940f8-f2b2-4e5a-331f-08dd67dc915d', N'af6acbca-e136-416f-5f7d-08dd67dc914c', N'Therion', N'Amaurot')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'3acdd6b8-4e14-41e4-3320-08dd67dc915d', N'd6acd618-4c9d-4f4c-5f7e-08dd67dc914c', N'Nixie', N'Matoya''s Relict')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'6edc93e6-caeb-4616-3321-08dd67dc915d', N'2fc185fa-1d62-4879-5f7f-08dd67dc914c', N'Lugus', N'The Grand Cosmos')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'09602133-503c-4391-3322-08dd67dc915d', N'f9a887c1-a427-4331-5f80-08dd67dc914c', N'Aenc Thon, Lord of the Lingering Gaze', N'Dohn Mheg')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'e8d1a7ab-6025-42fa-3323-08dd67dc915d', N'a2f89b44-4989-4de4-5f81-08dd67dc914c', N'Eden''s Promise', N'Eden''s Promise: Eternity')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'6c0a0ce7-4889-45b9-3324-08dd67dc915d', N'39e273af-f2da-4f73-5f82-08dd67dc914c', N'Innocence', N'The Crown Of The Immaculate')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'd04e9594-c61f-403e-3325-08dd67dc915d', N'42e3698a-0c66-4419-5f83-08dd67dc914c', N'', N'Learn 120 Spells - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'891c656f-89e1-4c40-3326-08dd67dc915d', N'a79aaec8-80c1-4030-5f84-08dd67dc914c', N'Forgiven Obscenity', N'Mt. Gulg')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'5964f38d-1243-4551-3327-08dd67dc915d', N'8228e025-2d2d-4302-5f85-08dd67dc914c', N'Eden Prime', N'Eden''s Gate: Resurrection')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'949e9291-5724-495d-3328-08dd67dc915d', N'f569631a-2d04-4933-5f86-08dd67dc914c', N'Titania', N'The Dancing Plague')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'c37127c6-b6e6-42f9-3329-08dd67dc915d', N'eacd6c1b-87ce-4889-5f87-08dd67dc914c', N'The Ruby Weapon', N'Cinder Drift')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'0b84527d-d3a6-401f-332a-08dd67dc915d', N'f86aa691-4a03-4e7d-5f88-08dd67dc914c', N'Seeker Of Solitude', N'The Grand Cosmos')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'c2345d87-fea6-441b-332b-08dd67dc915d', N'bc2c332e-e92d-48a5-5f89-08dd67dc914c', N'Mudman', N'Matoya''s Relict')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'78aca4b4-0445-41d0-332c-08dd67dc915d', N'93032652-612a-473d-5f8a-08dd67dc914c', N'Spectral Berserker', N'The Heroes'' Gauntlet')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'5f10e0a5-ab41-4e80-332d-08dd67dc915d', N'fcfe5687-e211-49c5-5f8b-08dd67dc914c', N'', N'Level 80 - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'3635f367-b86d-4ea0-332e-08dd67dc915d', N'dc996a96-3453-4b09-5f8c-08dd67dc914c', N'Slippery Armadillo', N'Amh Araeng (32, 9)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'8213f5f5-4426-4d2e-332f-08dd67dc915d', N'9c6c7f16-bce6-40f6-5f8d-08dd67dc914c', N'Long-tailed Armadillo', N'Amh Araeng (17, 30)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'4ba10631-8df0-4e91-3330-08dd67dc915d', N'60012432-0581-44f0-5f8e-08dd67dc914c', N'Greater Armadillo', N'Malikah''s Well')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'e0ba0d5a-e8ab-4429-3331-08dd67dc915d', N'4978cb08-97e2-4c90-5f8f-08dd67dc914c', N'Hobgoblin', N'Kholusia (33, 33)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'd2bc5b2f-bf51-4225-3332-08dd67dc915d', N'2629dc57-c058-4832-5f90-08dd67dc914c', N'Tsukuyomi', N'Castrum Fluminis')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'0b02c4e6-715f-4b30-3333-08dd67dc915d', N'960eff6e-8d0c-4ac9-5f91-08dd67dc914c', N'Suzaku', N'Hells'' Kier')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'7af767b2-5a88-48d7-3334-08dd67dc915d', N'57204e8c-ebea-4b05-5f92-08dd67dc914c', N'Qitian Dasheng', N'The Swallow''s Compass')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'15b76261-ad52-4655-3335-08dd67dc915d', N'4c90e116-1d91-4098-5f93-08dd67dc914c', N'Omega', N'Alphascape V3.0')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'bcf66855-a844-47fc-3336-08dd67dc915d', N'4d6331f4-bc96-4c67-5f94-08dd67dc914c', N'', N'Learn 100 Spells - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'f1353f28-4f61-4cbf-3337-08dd67dc915d', N'36b4c37a-8a3b-412c-5f95-08dd67dc914c', N'Courser Chocobo', N'The Dravanian Forelands (34, 28)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'db1b56a8-10f2-4d9e-3338-08dd67dc915d', N'a5b579bd-fafc-4683-5f96-08dd67dc914c', N'Sai Taisui', N'The Swallow''s Compass')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'c69455ed-78f3-4dfc-3339-08dd67dc915d', N'18a477b2-e685-4c18-5f97-08dd67dc914c', N'Kelpie', N'The Drowned City Of Skalla')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'be821934-972e-46f5-333a-08dd67dc915d', N'3f2fa9ef-0384-4ec1-5f98-08dd67dc914c', N'Salt Dhruva', N'The Lochs (22, 22)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'62acfa04-120b-4cba-333b-08dd67dc915d', N'3f2fa9ef-0384-4ec1-5f98-08dd67dc914c', N'Luminare (A Rank)', N'The Lochs')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'132b676f-ee19-4058-333c-08dd67dc915d', N'35b7f409-a062-47a3-5f99-08dd67dc914c', N'', N'Learn 100 Spells - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'e38577b0-0467-4043-333d-08dd67dc915d', N'a9eaed7e-a9c8-45cf-5f9a-08dd67dc914c', N'Omega', N'Alphascape V3.0')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'0bf0d3fa-163c-4b11-333e-08dd67dc915d', N'f56d38e6-dab6-4fd4-5f9b-08dd67dc914c', N'Alte Roite', N'Deltascape V1.0')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'3e60411f-ac53-4cbe-333f-08dd67dc915d', N'2eb28763-692c-445e-5f9c-08dd67dc914c', N'Kongamato', N'The Peaks (11, 25)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'7b45a9c7-1a5b-4e56-3340-08dd67dc915d', N'0d62f566-1efd-4c08-5f9d-08dd67dc914c', N'Master Coeurl', N'Upper La Noscea (8, 21)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'6258bbd0-b74e-4bcf-3341-08dd67dc915d', N'0d62f566-1efd-4c08-5f9d-08dd67dc914c', N'Coeurl Sruti', N'Temple of the Fist')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'2f4e783b-94a0-4fb9-3342-08dd67dc915d', N'9eedc900-13ce-4b83-5f9e-08dd67dc914c', N'Ivon Coeurlfist', N'The Temple Of The Fist')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'3bdd9cb9-171f-4731-3343-08dd67dc915d', N'03809f88-f2a4-482a-5f9f-08dd67dc914c', N'Genbu', N'Hells'' Lid')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'30e22a69-39bc-4ad8-3344-08dd67dc915d', N'f6250a86-a55a-4868-5fa0-08dd67dc914c', N'', N'Level 70 - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'28b24e09-ccb3-4092-3345-08dd67dc915d', N'924870c0-f893-46d7-5fa1-08dd67dc914c', N'Tokkapchi', N'Saint Mocianne''s Arboretum (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'2c4d6eb0-4533-4d9f-3346-08dd67dc915d', N'924870c0-f893-46d7-5fa1-08dd67dc914c', N'The Mudman (A Rank)', N'Il Mheg')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'6d714850-a233-4a4a-3347-08dd67dc915d', N'b6889edc-e127-4884-5fa2-08dd67dc914c', N'Phantom Train', N'Sigmascape V1.0')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'88f732ee-e49f-4174-3348-08dd67dc915d', N'e25458f6-ea79-4bc7-5fa3-08dd67dc914c', N'Lakshmi', N'Emanation')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'e6f48f9b-02bc-40d6-3349-08dd67dc915d', N'944ea2f6-9c73-4a12-5fa4-08dd67dc914c', N'Mist Dragon Heads', N'The Burn')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'c59894e4-1340-480c-334a-08dd67dc915d', N'e84e3812-2732-4205-5fa5-08dd67dc914c', N'Dojun-maru Adds (2nd Boss)', N'Kugane Castle')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'0ad9c7cb-7ae1-4e53-334b-08dd67dc915d', N'dddcb70d-eb80-433b-5fa6-08dd67dc914c', N'Ebisu Catfish', N'Yanxia (28, 6)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'6d0dfdfe-95d5-4617-334c-08dd67dc915d', N'dddcb70d-eb80-433b-5fa6-08dd67dc914c', N'Gyorai Quickstrike (B Rank)', N'Yanxia')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'eafddef0-aa3e-4ce7-334d-08dd67dc915d', N'9c7ff0d2-7309-4493-5fa7-08dd67dc914c', N'Ebisu Catfish', N'Yanxia (28, 6)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'7236bb63-79ac-4143-334e-08dd67dc915d', N'9c7ff0d2-7309-4493-5fa7-08dd67dc914c', N'Gyorai Quickstrike (B Rank)', N'Yanxia')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'ea4d2dda-9dc1-4da8-334f-08dd67dc915d', N'5069e2da-87e9-47a9-5fa8-08dd67dc914c', N'Brute Justice', N'Alexander - The Burden of the Son')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'834f7fc8-2b7e-4b45-3350-08dd67dc915d', N'9c5f7061-4ae2-4c17-5fa9-08dd67dc914c', N'Sophia', N'Containment Bay P1T6')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'b9619684-f7a7-4bac-3351-08dd67dc915d', N'93d504a4-2290-4b7d-5faa-08dd67dc914c', N'Ravana', N'Thok Ast Thok')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'34094bee-3267-40b8-3352-08dd67dc915d', N'fb0deea0-a42d-4d30-5fab-08dd67dc914c', N'Ghrah Luminary Adds', N'Pharos Sirius (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'e52e5616-e6f6-4bfd-3353-08dd67dc915d', N'e938e293-fdc6-441e-5fac-08dd67dc914c', N'Arena Scribe', N'Masked Carnivale #24')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'e6af6c37-f3e8-46d9-3354-08dd67dc915d', N'e938e293-fdc6-441e-5fac-08dd67dc914c', N'Mechanoscribe', N'The Great Gubal Library (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'd046cc1d-033b-4858-3355-08dd67dc915d', N'22970852-9bf6-4065-5fad-08dd67dc914c', N'Caduceus', N'The Binding Coil of Bahamut T1')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'738e4d8c-9e29-4c45-3356-08dd67dc915d', N'22970852-9bf6-4065-5fad-08dd67dc914c', N'Decaying Gourmand', N'The Lost City of Amdapor')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'5ae57359-eb78-4d1d-3357-08dd67dc915d', N'22970852-9bf6-4065-5fad-08dd67dc914c', N'Nullchu', N'Saint Mocianne''s Arboretum (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'f7158158-07b5-4d59-3358-08dd67dc915d', N'6277c6d7-9ba8-4431-5fae-08dd67dc914c', N'Cloud Wyvern', N'The Churning Mists (23, 29)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'c63c164f-9e45-499d-3359-08dd67dc915d', N'a5317d9c-d67b-4749-5faf-08dd67dc914c', N'Abalathian Wamoura (Heals Allies)', N'Sea of Clouds (9, 16)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'0a499b4f-b428-482b-335a-08dd67dc915d', N'a5317d9c-d67b-4749-5faf-08dd67dc914c', N'Wamoura', N'The Lost City of Amdapor')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'7e018b83-3657-4195-335b-08dd67dc915d', N'a9dd1b31-df81-427d-5fb0-08dd67dc914c', N'', N'Complete 30 stages at the Masked Carnivale.')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'964741a7-f11d-4e50-335c-08dd67dc915d', N'2c3befea-9033-4e5a-5fb1-08dd67dc914c', N'', N'Learn 50 Spells - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'004278e7-a611-43a3-335d-08dd67dc915d', N'95a96d59-897c-45ef-5fb2-08dd67dc914c', N'Sabotender Guardia', N'The Sunken Temple of Qarn (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'39cdb0fb-7a7e-4baa-335e-08dd67dc915d', N'4696be31-4dec-4ae5-5fb3-08dd67dc914c', N'The Manipulator', N'Alexander - The Burden of the Father')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'fab026ad-bcae-45b9-335f-08dd67dc915d', N'5e246ea3-3e17-45a6-5fb4-08dd67dc914c', N'Armored Weapon', N'Baelsar''s Wall')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'8a7455bd-4b37-4a24-3360-08dd67dc915d', N'5e246ea3-3e17-45a6-5fb4-08dd67dc914c', N'Doman Armored Weapon', N'Doma Castle')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'fcbd44cd-4203-4872-3361-08dd67dc915d', N'8bc8572d-b0e8-4465-5fb5-08dd67dc914c', N'Page 64 (No Tether)', N'The Great Gubal Library')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a51c5b4c-3f8a-4727-3362-08dd67dc915d', N'a6774b65-cc90-4b5b-5fb6-08dd67dc914c', N'Black Knight', N'The Vault')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'225cd2f0-bbb9-4c66-3363-08dd67dc915d', N'0708809d-b871-4b68-5fb7-08dd67dc914c', N'White Knight', N'The Vault')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'b931e1ad-a2f9-424a-3364-08dd67dc915d', N'6816b004-aa0e-4495-5fb8-08dd67dc914c', N'Dhalmel', N'Sea of Clouds (16, 30)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'0c98310a-039e-4a83-3365-08dd67dc915d', N'6816b004-aa0e-4495-5fb8-08dd67dc914c', N'Jhammel', N'The Peaks (26, 30)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'b47c49bf-a2b8-4fea-3366-08dd67dc915d', N'6816b004-aa0e-4495-5fb8-08dd67dc914c', N'Divine Dhalmel', N'Neverreap')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'd25f05bf-5a1c-40f1-3367-08dd67dc915d', N'ed9f7594-e437-4e6d-5fb9-08dd67dc914c', N'Anzu', N'Sea of Clouds (21, 6)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a1ddfc81-fe9d-474b-3368-08dd67dc915d', N'ed9f7594-e437-4e6d-5fb9-08dd67dc914c', N'Zu', N'Pharos Sirius')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'b75d29c3-96bf-468e-3369-08dd67dc915d', N'fba7e8f4-e546-4b64-5fba-08dd67dc914c', N'Poroggo', N'The Dravanian Hinterlands (12, 35)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'523e583a-efe7-435d-336a-08dd67dc915d', N'8fb0087e-7b95-4bcc-5fbb-08dd67dc914c', N'Queen Hawk', N'Saint Mocianne''s Arboretum')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'377fe180-2371-4acd-336b-08dd67dc915d', N'cac80765-f168-437a-5fbc-08dd67dc914c', N'Apanda', N'The Great Gubal Library (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'1dfeafbb-b4bc-4aa2-336c-08dd67dc915d', N'cac80765-f168-437a-5fbc-08dd67dc914c', N'Epilogi', N'Masked Carnivale #24')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'6b8747d5-6f1f-4471-336d-08dd67dc915d', N'1765f099-760e-42b1-5fbd-08dd67dc914c', N'Alexandrian Hider', N'Alexander - The Breath of the Creator')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'336bd4ae-012c-4540-336e-08dd67dc915d', N'1765f099-760e-42b1-5fbd-08dd67dc914c', N'Slipkinx Steeljoints (A Rank)', N'The Dravanian Hinterlands')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'ca8c9fa0-4454-45b1-336f-08dd67dc915d', N'9698428b-4b3f-4f84-5fbe-08dd67dc914c', N'Furryfoot Kupli Kipp', N'Thornmarch (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'59142c23-29b2-49d8-3370-08dd67dc915d', N'317baec3-1431-4615-5fbf-08dd67dc914c', N'Enkidu', N'Battle in the Big Keep')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'd3b96c09-5d3b-4b8c-3371-08dd67dc915d', N'317baec3-1431-4615-5fbf-08dd67dc914c', N'Arioch', N'The Lost City of Amdapor')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'bae88a96-6de4-49ac-3372-08dd67dc915d', N'317baec3-1431-4615-5fbf-08dd67dc914c', N'Empuse', N'Azys Lla (30, 12)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'fa2ebd43-70e0-450c-3373-08dd67dc915d', N'4c5dc323-7db6-4903-5fc0-08dd67dc914c', N'Paissa', N'Sea of Clouds (24, 33)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'cd5309e7-0703-440f-3374-08dd67dc915d', N'de4f4bac-8106-443c-5fc1-08dd67dc914c', N'Ash', N'Haukke Manor (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'eeca2283-58bb-47ce-3375-08dd67dc915d', N'de4f4bac-8106-443c-5fc1-08dd67dc914c', N'Biblioklept', N'The Great Gubal Library (Final Boss 3 Orb Spawn)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'd523420c-d1ae-4847-3376-08dd67dc915d', N'5d399ba7-4753-44de-5fc2-08dd67dc914c', N'Faust & Sturm Doll', N'Alexander - The Fist of the Father')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a2b0d4d5-8d21-4461-3377-08dd67dc915d', N'5d399ba7-4753-44de-5fc2-08dd67dc914c', N'Jagd Doll', N'Alexander - The Cuff of the Father')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'cdf7f5d0-c535-4e24-3378-08dd67dc915d', N'664d69bb-a916-4a12-5fc3-08dd67dc914c', N'Conodont', N'Sea of Clouds (26, 33)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'82d17570-d56a-4a68-3379-08dd67dc915d', N'664d69bb-a916-4a12-5fc3-08dd67dc914c', N'Hikagiri', N'Shisui of the Violet Tides')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'4e38716d-0068-4501-337a-08dd67dc915d', N'c68c5fb9-9a0a-4af7-5fc4-08dd67dc914c', N'Lone Yeti', N'Coerthas Western Highlands (22, 27)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'62a95290-4e11-4ec5-337b-08dd67dc915d', N'c68c5fb9-9a0a-4af7-5fc4-08dd67dc914c', N'Yeti', N'Snowcloak')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'74f85e18-f5e3-48e9-337c-08dd67dc915d', N'8fb3daf0-f25b-48aa-5fc5-08dd67dc914c', N'Living Liquid', N'Alexander - The Arm of the Father')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'b859f9d5-cf5b-49be-337d-08dd67dc915d', N'8fb3daf0-f25b-48aa-5fc5-08dd67dc914c', N'Shikigami', N'Masked Carnivale #29')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'e6e72014-1df3-419a-337e-08dd67dc915d', N'799309b3-5b09-4371-5fc6-08dd67dc914c', N'Griffin', N'Sea of Clouds (36, 9)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'45ec8ec4-bccf-4341-337f-08dd67dc915d', N'799309b3-5b09-4371-5fc6-08dd67dc914c', N'Opinicus', N'The Dusk Vigil')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'76b98ea6-aed1-470e-3380-08dd67dc915d', N'671e2ba2-d529-4c37-5fc7-08dd67dc914c', N'Leviathan', N'The Whorleater (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'0479d875-82b6-407f-3381-08dd67dc915d', N'2ff4e350-70fd-4b60-5fc8-08dd67dc914c', N'Shiva', N'Akh Afah Amphitheatre (Extreme)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'230705d1-33c8-4fdb-3382-08dd67dc915d', N'c14efe5d-c77a-4898-5fc9-08dd67dc914c', N'Ramuh', N'The Striking Tree (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a1b8b8d8-4215-4f42-3383-08dd67dc915d', N'8f62a79a-b51d-4e8a-5fca-08dd67dc914c', N'Titan', N'The Navel (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a61328d4-9738-4b57-3384-08dd67dc915d', N'f0ecd0a9-1fc2-4c62-5fcb-08dd67dc914c', N'Ifrit', N'The Bowl of Embers')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'2d0622a0-2a78-4d29-3385-08dd67dc915d', N'01a6d574-03e4-4f00-5fcc-08dd67dc914c', N'Garuda', N'The Howling Eye (Extreme)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'5d7b10e6-4988-45db-3386-08dd67dc915d', N'59d713a1-142d-420f-5fcd-08dd67dc914c', N'Lentic Mudpuppy', N'Mor Dhona (13, 10)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'2acd71ed-858d-497f-3387-08dd67dc915d', N'c9cb585e-2fc0-455c-5fce-08dd67dc914c', N'', N'Complete 20 stages in the Masked Carnivale.')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'b6fa53d7-64fc-4d1e-3388-08dd67dc915d', N'1fe85ea5-4c7b-4678-5fcf-08dd67dc914c', N'Galvanth the Dominator', N'The Tam-tara Deepcroft')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'8d889eb0-d1ed-4144-3389-08dd67dc915d', N'2e0f34c2-788b-4f94-5fd0-08dd67dc914c', N'Karlabos', N'Sastasha (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'3b0a9cba-298c-4792-338a-08dd67dc915d', N'2e0f34c2-788b-4f94-5fd0-08dd67dc914c', N'Crag Claw', N'The Peaks (25, 9)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'8648b4e2-082f-449e-338b-08dd67dc915d', N'2e0f34c2-788b-4f94-5fd0-08dd67dc914c', N'Reflection of Karlabos', N'Sirensong Sea')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'4e959ecf-45bc-49f0-338c-08dd67dc915d', N'80b7bfc9-f136-47f1-5fd1-08dd67dc914c', N'', N'Complete 10 stages in the Masked Carnivale.')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a0b6d988-2c90-45d9-338d-08dd67dc915d', N'adf8c922-a7f7-4d61-5fd2-08dd67dc914c', N'Fruminoius Koheel Ja', N'The Wanderer''s Palace (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'703096ed-7eac-4d42-338e-08dd67dc915d', N'7dab4fd6-4706-4ee1-5fd3-08dd67dc914c', N'Kraken', N'Sastasha (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'6241266c-d4e2-4cd4-338f-08dd67dc915d', N'9eca6495-7f5c-4cfb-5fd4-08dd67dc914c', N'Sabotender Bailaor', N'Southern Thanalan (16, 15)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'80085382-63ff-4630-3390-08dd67dc915d', N'be59a1ef-4339-428f-5fd5-08dd67dc914c', N'Enkidu', N'Battle in the Big Keep')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'7b8b2af2-cb44-48ae-3391-08dd67dc915d', N'be59a1ef-4339-428f-5fd5-08dd67dc914c', N'Guardian', N'Sigmascape V3.0')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'c054319d-ec3d-401f-3392-08dd67dc915d', N'95026011-8266-4ef3-5fd6-08dd67dc914c', N'Chimera', N'Cutter''s Cry')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'551e4078-b31d-4a8c-3393-08dd67dc915d', N'95026011-8266-4ef3-5fd6-08dd67dc914c', N'Dhorme Chimera', N'A Relic Reborn: The Chimera')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'912103eb-0a23-4537-3394-08dd67dc915d', N'95026011-8266-4ef3-5fd6-08dd67dc914c', N'Azulmagia', N'The Masked Carnivale #25')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'b0647d69-35fc-4dd0-3395-08dd67dc915d', N'd3d6829c-aed5-46da-5fd7-08dd67dc914c', N'Chimera', N'Cutter''s Cry')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'9cd73236-20a8-4dd4-3396-08dd67dc915d', N'd3d6829c-aed5-46da-5fd7-08dd67dc914c', N'Dhorme Chimera', N'A Relic Reborn: The Chimera')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a1f2de2d-09f5-4415-3397-08dd67dc915d', N'd3d6829c-aed5-46da-5fd7-08dd67dc914c', N'Azulmagia', N'The Masked Carnivale #25')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'af42e076-1371-46eb-3398-08dd67dc915d', N'ff905533-1646-45ac-5fd8-08dd67dc914c', N'Giggling Gigantoad', N'Western Thanalan (15, 7)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'282b5ca2-3f4c-41bb-3399-08dd67dc915d', N'facaf6db-e734-44ac-5fd9-08dd67dc914c', N'Toxic Toad', N'Central Thanalan (26, 19)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'b7170e24-3f25-4818-339a-08dd67dc915d', N'facaf6db-e734-44ac-5fd9-08dd67dc914c', N'Laughing Toad', N'Western Thanalan (14, 6)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'905d076d-49fb-4421-339b-08dd67dc915d', N'd4931c08-a4cb-4153-5fda-08dd67dc914c', N'', N'Learn 10 Spells - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'c4221b25-22ad-4198-339c-08dd67dc915d', N'd854677e-7a04-4c81-5fdb-08dd67dc914c', N'Cuca Fera', N'The Stone Vigil (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'fe4649bd-fb3b-4cbb-339d-08dd67dc915d', N'4c4b1a0c-753a-4d8c-5fdc-08dd67dc914c', N'Stroper', N'Central Shroud (12, 23)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a5712bf4-0992-442b-339e-08dd67dc915d', N'4c4b1a0c-753a-4d8c-5fdc-08dd67dc914c', N'Morbol', N'Mor Dhona (15, 14)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'8ce49006-d51f-43dc-339f-08dd67dc915d', N'6b0c3243-20eb-4f6f-5fdd-08dd67dc914c', N'Anantaboga', N'Amdapor Keep')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'eceabbd9-12bd-42a4-33a0-08dd67dc915d', N'6b0c3243-20eb-4f6f-5fdd-08dd67dc914c', N'Bibliolater', N'The Great Gubal Library (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'66a04b6b-0733-4b00-33a1-08dd67dc915d', N'2b99a045-7927-44a4-5fde-08dd67dc914c', N'Ultros', N'The Dragon’s Neck')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'9a2aaa23-447d-4d66-33a2-08dd67dc915d', N'46fa57e4-01f5-47cc-5fdf-08dd67dc914c', N'Typhon', N'The Dragon’s Neck')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'f694fefe-5600-41d7-33a3-08dd67dc915d', N'46fa57e4-01f5-47cc-5fdf-08dd67dc914c', N'Typhon', N'The Masked Carnivale #20 & #27')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'f9277f88-e2f6-4c5b-33a4-08dd67dc915d', N'f36272d5-9803-40b1-5fe0-08dd67dc914c', N'Apkallu', N'Eastern La Noscea (27, 35)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'8cda74b6-ac4b-4220-33a5-08dd67dc915d', N'95e40c7a-86b5-4a55-5fe1-08dd67dc914c', N'Qiqirn Shellsweeper', N'Central Thanalan (16, 19)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'10a43abb-e3f6-47c1-33a6-08dd67dc915d', N'f61ca9f4-795b-4eac-5fe2-08dd67dc914c', N'', N'Learn 20 Spells - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'af65b94d-7987-44b0-33a7-08dd67dc915d', N'1ea98bfd-1ee9-4cc6-5fe3-08dd67dc914c', N'Glide Bomb', N'Western Thanalan (27, 16)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'44a70ef8-1581-46d0-33a8-08dd67dc915d', N'dd7d297a-cbbf-4918-5fe4-08dd67dc914c', N'', N'Learn 5 Spells - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'84d6e610-7641-40d9-33a9-08dd67dc915d', N'747f1de1-ec23-43e3-5fe5-08dd67dc914c', N'Goblin Fisher', N'Middle La Noscea (23, 21)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'aac216ee-caa0-4399-33aa-08dd67dc915d', N'747f1de1-ec23-43e3-5fe5-08dd67dc914c', N'Goblin Gambler', N'Middle La Noscea (23, 21)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'1a098190-2d8a-4072-33ab-08dd67dc915d', N'09a7dba6-fd5f-4a69-5fe6-08dd67dc914c', N'Treant Sapling', N'North Shroud (24, 28)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a010e528-df48-4216-33ac-08dd67dc915d', N'8c61a479-56f7-430a-5fe7-08dd67dc914c', N'Cave Bat', N'Lower La Noscea (27, 16)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'ade04a8e-f7db-499a-33ad-08dd67dc915d', N'33839aa8-2c82-4fbc-5fe8-08dd67dc914c', N'Trickster Imp', N'Central Shroud (27, 24)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'f92bafb3-46c3-4d17-33ae-08dd67dc915d', N'4aeabbf8-e5da-4aec-5fe9-08dd67dc914c', N'Tonberry King', N'The Wanderer’s Palace')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'9848f85c-512e-4556-33af-08dd67dc915d', N'120e3769-c827-43a7-5fea-08dd67dc914c', N'Manor Sentry', N'Haukke Manor')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'587802c5-c67c-4d5d-33b0-08dd67dc915d', N'c9c72090-a7f0-48b2-5feb-08dd67dc914c', N'', N'Learn 10 Spells - Whalaqee Totem')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'55580e2a-1395-4d27-33b1-08dd67dc915d', N'b7a42fa1-57ec-4433-5fec-08dd67dc914c', N'Wild Boar', N'East Shroud (18, 24)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'0ed56373-b7db-421f-33b2-08dd67dc915d', N'8966ce8e-47c5-485b-5fed-08dd67dc914c', N'Basalt Golem', N'Outer La Noscea (14, 16)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'ec97a009-4e06-4442-33b3-08dd67dc915d', N'8966ce8e-47c5-485b-5fed-08dd67dc914c', N'Sandstone Golem', N'Southern Thanalan (22, 12)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'c04b65f8-6444-43f5-33b4-08dd67dc915d', N'8966ce8e-47c5-485b-5fed-08dd67dc914c', N'Azulmagia', N'The Masked Carnivale #25')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'461bd2be-c03a-4645-33b5-08dd67dc915d', N'a84a0231-6fe3-4b45-5fee-08dd67dc914c', N'Coincounter', N'The Aurum Vale')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'8d4a7d39-2a87-4fb9-33b6-08dd67dc915d', N'f0993f6e-edaa-4832-5fef-08dd67dc914c', N'Siren', N'Pharos Sirius')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'330bd274-e922-4f0a-33b7-08dd67dc915d', N'4dddc8a9-211c-498f-5ff0-08dd67dc914c', N'Killer Wespe', N'Middle La Noscea (15, 15)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'40ac11d5-aefe-4c84-33b8-08dd67dc915d', N'2ec587ca-4807-42b9-5ff1-08dd67dc914c', N'Baalzephon', N'The Lost City of Amdapor')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'aa7ef4fa-1632-4c22-33b9-08dd67dc915d', N'2ec587ca-4807-42b9-5ff1-08dd67dc914c', N'Dantalion', N'The Tam-Tara Deepcroft (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'5fb44386-745c-4903-33ba-08dd67dc915d', N'2ec587ca-4807-42b9-5ff1-08dd67dc914c', N'Flame Sergeant Dalvag (B Rank)', N'Northern Thanalan')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'75b0267d-508f-49e6-33bb-08dd67dc915d', N'75f127f2-162a-4cd8-5ff2-08dd67dc914c', N'ADS', N'The Binding Coil of Bahamut T1')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'3e83c11c-8438-4c70-33bc-08dd67dc915d', N'75f127f2-162a-4cd8-5ff2-08dd67dc914c', N'Bestial Node', N'Masked Carnivale #15')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'6e5a318c-755a-40c2-33bd-08dd67dc915d', N'2f7749cb-2b3c-43e5-5ff3-08dd67dc914c', N'Magitek Vanguard H-2', N'Northern Thanalan (16, 15)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'31bcd0c2-6e80-4f37-33be-08dd67dc915d', N'df623158-56ca-4ea6-5ff4-08dd67dc914c', N'Zu', N'Pharos Sirius')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'55f2e1dd-f3c9-42ed-33bf-08dd67dc915d', N'ec19e25a-567d-4e79-5ff5-08dd67dc914c', N'Ultros', N'The Dragon’s Neck')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a25ccede-0156-4a75-33c0-08dd67dc915d', N'ec19e25a-567d-4e79-5ff5-08dd67dc914c', N'Leviathan', N'The Whorleater')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'99a95dd8-9157-44e3-33c1-08dd67dc915d', N'ec19e25a-567d-4e79-5ff5-08dd67dc914c', N'Ultros', N'The Masked Carnivale #20')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'85fa2235-fd26-47e9-33c2-08dd67dc915d', N'956128d8-8887-440c-5ff6-08dd67dc914c', N'Gobmachine G-VI', N'Brayflox''s Longstop (Hard)')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'fb9a989f-2ed7-4242-33c3-08dd67dc915d', N'956128d8-8887-440c-5ff6-08dd67dc914c', N'Magitek Gunship', N'The Keeper of the Lake')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'a68b5c23-4fd6-46e4-33c4-08dd67dc915d', N'956128d8-8887-440c-5ff6-08dd67dc914c', N'Omega', N'Alphascape V3.0')
GO
INSERT [dbo].[SpellSources] ([Id], [SpellId], [Enemy], [Location]) VALUES (N'04f17c40-555b-4e63-33c5-08dd67dc915d', N'c91ff297-8295-48f9-5ff7-08dd67dc914c', N'', N'Learned First')
GO
INSERT [dbo].[Users] ([Id], [Email], [Password], [VerificationToken], [VerificationCode], [VerificationExpires], [IsVerified], [PasswordResetToken], [PasswordResetTokenExpires], [FailedLoginAttempts], [LockoutEnd], [IsAdmin], [CreatedOn], [UpdatedOn]) VALUES (N'f1e3a9e6-04b6-49b6-55af-08dd35d1bf5d', N'jgifpeg@yahoo.com', N'$2a$11$HkFJDV98bG5k0uGA/TdAPOpsR5HHnJCA6lKYLL11CRPw8YqMusU7C', N'Ib5NY4DJAicnfdMXEfuDO722QXQBnUOVlzjNtVzW3B8', N'$2a$11$W.1msflrAGQq/FlD25/r2erlypGrJ9xEx2hGK.RO1rJftc0/vkvlK', CAST(N'2025-01-16T02:11:53.1459179' AS DateTime2), 0, NULL, NULL, 0, NULL, 0, CAST(N'2025-01-16T02:01:53.0413354' AS DateTime2), CAST(N'2025-01-16T02:01:53.0413354' AS DateTime2))
GO
INSERT [dbo].[Users] ([Id], [Email], [Password], [VerificationToken], [VerificationCode], [VerificationExpires], [IsVerified], [PasswordResetToken], [PasswordResetTokenExpires], [FailedLoginAttempts], [LockoutEnd], [IsAdmin], [CreatedOn], [UpdatedOn]) VALUES (N'5f4f8293-db6a-439c-55b0-08dd35d1bf5d', N'jgifpeg@gmail.com', N'$2a$11$RpaKS0YCOqhoHVo/536r/eLVmg9ijSSbzHob/wLy4EXYWNbNzZOD.', NULL, NULL, NULL, 1, NULL, NULL, 0, NULL, 0, CAST(N'2025-01-16T02:02:37.1454084' AS DateTime2), CAST(N'2025-01-16T02:07:03.7196224' AS DateTime2))
GO
INSERT [dbo].[Users] ([Id], [Email], [Password], [VerificationToken], [VerificationCode], [VerificationExpires], [IsVerified], [PasswordResetToken], [PasswordResetTokenExpires], [FailedLoginAttempts], [LockoutEnd], [IsAdmin], [CreatedOn], [UpdatedOn]) VALUES (N'aa51b3d0-9f2b-4dab-8642-08dd5b7b8543', N'joeaculberson@gmail.com', N'$2a$11$r53XwJtthzh4B18eqIgFdu2qBCzZ5VR73xFd0fVTVgPXxk65zoPe2', NULL, NULL, NULL, 1, NULL, NULL, 0, NULL, 1, CAST(N'2025-03-05T00:20:21.0194008' AS DateTime2), CAST(N'2025-03-19T19:48:57.9893613' AS DateTime2))
GO
INSERT [dbo].[Users] ([Id], [Email], [Password], [VerificationToken], [VerificationCode], [VerificationExpires], [IsVerified], [PasswordResetToken], [PasswordResetTokenExpires], [FailedLoginAttempts], [LockoutEnd], [IsAdmin], [CreatedOn], [UpdatedOn]) VALUES (N'2bc74dc2-3a32-4bde-b464-08dd68a599be', N'Pavetheway101@gmail.com', N'$2a$11$6.LIUBTR5j0nsYLcUtcrV.dyneL2aS00ZhtNYdMmHL/CiVC1YKc0K', NULL, NULL, NULL, 1, NULL, NULL, 0, NULL, 1, CAST(N'2025-03-21T18:24:21.3458272' AS DateTime2), CAST(N'2025-03-21T18:25:25.0265942' AS DateTime2))
GO
INSERT [dbo].[Characters] ([Id], [LoadstoneCharacterId], [UserId], [FirstName], [LastName], [Server], [Title], [Avatar], [Default], [ActiveClassJobIcon], [ActiveClassJobLevel], [Bio], [FreeCompany], [Gender], [GrandCompanyName], [GrandCompanyRank], [GuardianDeityIcon], [GuardianDeityName], [Nameday], [Portrait], [PvpTeam], [Race], [RaceClanGender], [TownIcon], [TownName], [Tribe], [CreatedOn], [UpdatedOn]) VALUES (N'2dc0b7e8-8b5e-480f-1119-08dd584d90a6', N'11947841', N'5f4f8293-db6a-439c-55b0-08dd35d1bf5d', N'Seifer', N'Moggingway', N'Excalibur', N'Pom Friend', N'https://img2.finalfantasyxiv.com/f/463f7bda3d453f5c7efdd3e01411f59f_745baffc465480ed372e274d50318290fc0.jpg?1740783820', 1, N'https://lds-img.finalfantasyxiv.com/h/h/4ghjpyyuNelzw1Bl0sM_PBA_FE.png', 100, N'bluemageparty:1be34d27794a6c67eb4a9a98c5391beaa60f10714887b766b5478cbe73564d4e', N'Tonberry Knights', N'♂', N'Adder', N'Serpent Captain', N'https://lds-img.finalfantasyxiv.com/h/D/IaeQ866z-QseoMBt5GJFKtq9MM.png', N'Althyk, the Keeper', N'7th Sun of the 2nd Umbral Moon', N'https://img2.finalfantasyxiv.com/f/463f7bda3d453f5c7efdd3e01411f59f_745baffc465480ed372e274d50318290fl0.jpg?1740783820', NULL, N'Lalafell', N'Lalafell', NULL, N'Limsa Lominsa', N'Dunesfolk', CAST(N'2025-02-28T23:37:11.4607731' AS DateTime2), CAST(N'2025-02-28T23:37:11.4607734' AS DateTime2))
GO
INSERT [dbo].[Characters] ([Id], [LoadstoneCharacterId], [UserId], [FirstName], [LastName], [Server], [Title], [Avatar], [Default], [ActiveClassJobIcon], [ActiveClassJobLevel], [Bio], [FreeCompany], [Gender], [GrandCompanyName], [GrandCompanyRank], [GuardianDeityIcon], [GuardianDeityName], [Nameday], [Portrait], [PvpTeam], [Race], [RaceClanGender], [TownIcon], [TownName], [Tribe], [CreatedOn], [UpdatedOn]) VALUES (N'404c60db-a15f-4112-111a-08dd584d90a6', N'11909222', N'5f4f8293-db6a-439c-55b0-08dd35d1bf5d', N'Seifer', N'Mog', N'Ultros', N'', N'https://img2.finalfantasyxiv.com/f/640c30f772467e1a97278db1d0451aa9_c514cdcdb619439df97d906d4434ccc6fc0.jpg?1740782624', 0, N'https://lds-img.finalfantasyxiv.com/h/s/gl62VOTBJrm7D_BmAZITngUEM8.png', 10, N'bluemageparty:1be34d27794a6c67eb4a9a98c5391beaa60f10714887b766b5478cbe73564d4e', NULL, N'♂', N'', N'', N'https://lds-img.finalfantasyxiv.com/h/D/IaeQ866z-QseoMBt5GJFKtq9MM.png', N'Althyk, the Keeper', N'7th Sun of the 2nd Umbral Moon', N'https://img2.finalfantasyxiv.com/f/640c30f772467e1a97278db1d0451aa9_c514cdcdb619439df97d906d4434ccc6fl0.jpg?1740782624', NULL, N'Hyur', N'Hyur', NULL, N'Gridania', N'Midlander', CAST(N'2025-02-28T23:39:39.8761361' AS DateTime2), CAST(N'2025-02-28T23:39:39.8761363' AS DateTime2))
GO
INSERT [dbo].[Characters] ([Id], [LoadstoneCharacterId], [UserId], [FirstName], [LastName], [Server], [Title], [Avatar], [Default], [ActiveClassJobIcon], [ActiveClassJobLevel], [Bio], [FreeCompany], [Gender], [GrandCompanyName], [GrandCompanyRank], [GuardianDeityIcon], [GuardianDeityName], [Nameday], [Portrait], [PvpTeam], [Race], [RaceClanGender], [TownIcon], [TownName], [Tribe], [CreatedOn], [UpdatedOn]) VALUES (N'6ed9edc9-a0ba-458d-742a-08dd6720158a', N'692625', N'aa51b3d0-9f2b-4dab-8642-08dd5b7b8543', N'Pave', N'Theway', N'Excalibur', N'Wild Thing', N'https://img2.finalfantasyxiv.com/f/40bfadb0b349ec6ec1d8c14627559675_745baffc465480ed372e274d50318290fc0.jpg?1742411827', 1, N'https://lds-img.finalfantasyxiv.com/h/E/d0Tx-vhnsMYfYpGe9MvslemEfg.png', 100, N'bluemageparty:d65c45d8fd9d760e736e9ed5653c23b283cb3f714da995534c6235ce638307ed', NULL, N'♂', N'Maelstrom', N'Storm Captain', N'https://lds-img.finalfantasyxiv.com/h/2/a0fvYSx_56BEzhPPYyLykkdZ6k.png', N'Azeyma, the Warden', N'17th Sun of the 3rd Umbral Moon', N'https://img2.finalfantasyxiv.com/f/40bfadb0b349ec6ec1d8c14627559675_745baffc465480ed372e274d50318290fl0.jpg?1742411827', NULL, N'Miqo''te', N'Miqo''te', NULL, N'Ul''dah', N'Keeper of the Moon', CAST(N'2025-03-19T19:56:05.4375002' AS DateTime2), CAST(N'2025-03-19T19:56:05.4375004' AS DateTime2))
GO
INSERT [dbo].[Characters] ([Id], [LoadstoneCharacterId], [UserId], [FirstName], [LastName], [Server], [Title], [Avatar], [Default], [ActiveClassJobIcon], [ActiveClassJobLevel], [Bio], [FreeCompany], [Gender], [GrandCompanyName], [GrandCompanyRank], [GuardianDeityIcon], [GuardianDeityName], [Nameday], [Portrait], [PvpTeam], [Race], [RaceClanGender], [TownIcon], [TownName], [Tribe], [CreatedOn], [UpdatedOn]) VALUES (N'b0789c99-0b02-4510-03e3-08dd67dc6cfd', N'43958939', N'aa51b3d0-9f2b-4dab-8642-08dd5b7b8543', N'Taro', N'Bokoingway', N'Excalibur', N'', N'https://img2.finalfantasyxiv.com/f/83c493dd575377febc7f0a749f1da784_745baffc465480ed372e274d50318290fc0.jpg?1742492287', 1, N'https://lds-img.finalfantasyxiv.com/h/Q/ZpqEJWYHj9SvHGuV9cIyRNnIkk.png', 10, N'bluemageparty:e1b87cdfb79505aa8ccb3f8d8ba7b67aab12f31ab3c1edad585e4a4fa275cabf', NULL, N'♂', N'', N'', N'https://lds-img.finalfantasyxiv.com/h/1/k89F84HtzFRCscs8mgAjIcO72Q.png', N'Oschon, the Wanderer', N'26th Sun of the 1st Astral Moon', N'https://img2.finalfantasyxiv.com/f/83c493dd575377febc7f0a749f1da784_745baffc465480ed372e274d50318290fl0.jpg?1742492287', NULL, N'Lalafell', N'Lalafell', NULL, N'Gridania', N'Dunesfolk', CAST(N'2025-03-20T18:38:31.8324886' AS DateTime2), CAST(N'2025-03-20T18:38:31.8324886' AS DateTime2))
GO
INSERT [dbo].[SpellsOwned] ([Id], [CharacterId], [SpellId], [Owned], [CreatedOn], [UpdatedOn]) VALUES (N'1d88ada0-10a0-4475-e144-08dd67dca0c1', N'6ed9edc9-a0ba-458d-742a-08dd6720158a', N'c91ff297-8295-48f9-5ff7-08dd67dc914c', 1, CAST(N'2025-03-20T18:25:44.3981175' AS DateTime2), CAST(N'2025-03-20T18:25:44.3979595' AS DateTime2))
GO
INSERT [dbo].[Parties] ([Id], [UserId], [CreatedOn], [UpdatedOn], [Name]) VALUES (N'05d98e7a-d9b2-4eac-df0c-08dd5847fe6c', N'5f4f8293-db6a-439c-55b0-08dd35d1bf5d', CAST(N'2025-02-28T23:38:14.3487472' AS DateTime2), CAST(N'2025-02-28T23:38:14.3487462' AS DateTime2), N'Test Party')
GO
INSERT [dbo].[Parties] ([Id], [UserId], [CreatedOn], [UpdatedOn], [Name]) VALUES (N'794b8cf5-fa41-4820-4e0f-08dd672067fc', N'aa51b3d0-9f2b-4dab-8642-08dd5b7b8543', CAST(N'2025-03-19T19:58:23.7676076' AS DateTime2), CAST(N'2025-03-19T19:58:23.7675016' AS DateTime2), N'Pave''s party')
GO
INSERT [dbo].[Parties] ([Id], [UserId], [CreatedOn], [UpdatedOn], [Name]) VALUES (N'9e64f582-44fd-46af-4e10-08dd672067fc', N'aa51b3d0-9f2b-4dab-8642-08dd5b7b8543', CAST(N'2025-03-19T20:44:53.0870822' AS DateTime2), CAST(N'2025-03-19T20:44:53.0870810' AS DateTime2), N'party 2')
GO
INSERT [dbo].[PartyMembers] ([Id], [PartyId], [CharacterId], [IsHost], [CreatedOn], [UpdatedOn]) VALUES (N'72c1a58d-4b57-49a5-4cac-08dd5847fe6d', N'05d98e7a-d9b2-4eac-df0c-08dd5847fe6c', N'2dc0b7e8-8b5e-480f-1119-08dd584d90a6', 1, CAST(N'2025-02-28T23:38:14.3490048' AS DateTime2), CAST(N'2025-02-28T23:38:14.3490041' AS DateTime2))
GO
INSERT [dbo].[PartyMembers] ([Id], [PartyId], [CharacterId], [IsHost], [CreatedOn], [UpdatedOn]) VALUES (N'4df21160-c40d-49d3-6c52-08dd672067fc', N'794b8cf5-fa41-4820-4e0f-08dd672067fc', N'6ed9edc9-a0ba-458d-742a-08dd6720158a', 1, CAST(N'2025-03-19T19:58:23.7687070' AS DateTime2), CAST(N'2025-03-19T19:58:23.7685180' AS DateTime2))
GO
INSERT [dbo].[PartyMembers] ([Id], [PartyId], [CharacterId], [IsHost], [CreatedOn], [UpdatedOn]) VALUES (N'73e1a429-9826-4969-6c53-08dd672067fc', N'9e64f582-44fd-46af-4e10-08dd672067fc', N'6ed9edc9-a0ba-458d-742a-08dd6720158a', 1, CAST(N'2025-03-19T20:44:53.0875814' AS DateTime2), CAST(N'2025-03-19T20:44:53.0875800' AS DateTime2))
GO
