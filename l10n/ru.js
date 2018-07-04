OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Учётная запись пользователя отключена, свяжитесь с администратором сервера.",
    "Saved" : "Сохранено",
    "Unknown error, please check the log file for more details." : "Неизвестная ошибка, обратитесь к файлу журнала для более подробных сведений.",
    "Direct log in" : "Прямой вход в систему",
    "SSO & SAML log in" : "Вход через SSO и SAML",
    "X.509 certificate of the Service Provider" : "X.509-сертификат поставщика услуг",
    "Private key of the Service Provider" : "Закрытый ключ поставщика услуг",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Указывает, что nameID <samlp:logoutRequest>, отправленное этим поставщиком услуг, будет зашифровано.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Указывает, должны ли отправляемые этим SP сообщения  <samlp:AuthnRequest>, быть подписанными.  [Метаданные SP предложат эту информацию]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Указывает, должны ли отправляемые этим SP сообщения  <samlp:logoutRequest>, быть подписанными.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Указывает, должны ли отправляемые этим SP сообщения  <samlp:logoutResponse>, быть подписанными.",
    "Whether the metadata should be signed." : "Должны ли быть подписаны метаданные.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Указывает, должны ли запрашиваемые этим SP элементы <samlp:Response>, <samlp:LogoutRequest> и <samlp:LogoutResponse>, быть подписанными.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Указывает, должны ли запрашиваемые этим SP элементы  <saml:Assertion>, быть подписанными. [Метаданные SP предложат эту информацию]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Указывает, требуется ли шифрование полученных этим SP элементов <saml:Assertion>.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Указывает, должно ли NameID, полученное этим SP, быть текущим.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Указывает, должно ли NameID, полученное этим SP, быть зашифрованным.",
    "Indicates if the SP will validate all received XML." : "Указывает, будет ли SP проверять все полученные XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS кодирует в формат URL-Encoded данные SAML в нижнем регистре, а тулкит  умолчанию использует верхний регистр. Включите для совместимости ADFS на проверке подписи.",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Дополнительное отображаемое имя поставщика удостоверений (по умолчанию: «SSO & SAML log in»)",
    "Attribute to map the UID to." : "Атрибут для привязки UID.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Позволять аутентификацию только если учётная запись существует на другом внутреннем интерфейсе (например, LDAP).",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Разрешить использование нескольких пользовательских back-end (например, LDAP)",
    "Attribute to map the displayname to." : "Атрибут для привязки отображаемого имени.",
    "Attribute to map the email address to." : "Атрибут для привязки email.",
    "Attribute to map the quota to." : "Атрибут для сопоставления квоты.",
    "Attribute to map the users groups to." : "Атрибут для отображения групп пользователей.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Использовать SAML для настольных клиентов синхронизации %s (потребуется повторная аутентификация пользователей)",
    "SSO & SAML authentication" : "Подтверждение подлинности SSO и SAML",
    "Authenticate using single sign-on" : "Аутентификация с использованием единого входа",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Используя приложение SSO & SAML вашего Nextcloud, вы можете легко интегрировать существующее решение Single Sign-On с Nextcloud. Кроме того, вы можете использовать службу Nextcloud LDAP для удобства пользователей. (например, при совместном использовании)\nНа данный момент поддерживаются и тестируются следующие поставщики:\n\n* ** SAML 2.0 **\n* OneLogin\n* Shibboleth\n* Active Directory Federation Services (ADFS)\n\n* ** Аутентификация через переменную окружения **\n* Kerberos (mod_auth_kerb)\n* Любая другая служба, которая проводит аутентификацию с использованием переменной среды\n\nХотя теоретически любая другая служба аутентификации, реализующая один из этих стандартов, совместима, мы хотели бы отметить, что они не являются частью какой-либо матрицей внутренних тестов.",
    "Open documentation" : "Открыть документацию",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Выберите, хотите ли вы проверять подлинность с помощью встроенного в Nextcloud провайдера SAML или же хотите  использовать для этого переменные окружения.",
    "Use built-in SAML authentication" : "Использовать встроенную SAML аутентификацию",
    "Use environment variable" : "Использовать переменные окружения",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\"" : "Убедитесь, что настроен пользователь с правами администратора, который может получить доступ к экземпляру через SSO. Вход в систему с вашей обычной учетной записью %s больше не будет возможен, если вы не включили \"%s\"",
    "General" : "Основные",
    "Service Provider Data" : "Данные поставщика услуг (SP)",
    "If your Service Provider should use certificates you can optionally specify them here." : "Если вашему SP следует использовать сертификаты, вы сможете дополнительно указать из тут.",
    "Show Service Provider settings…" : "Показать настройки поставщика услуг…",
    "Identity Provider Data" : "Данные провайдера идентификации (IdP)",
    "Configure your IdP settings here." : "Настройте тут параметры вашего IdP.",
    "Identifier of the IdP entity (must be a URI)" : "Идентификатор записи IdP (в формате URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL провайдера идентификации (IdP), на который поставщик услуг (SP) будет отправлять запрос подтверждения подлинности",
    "Show optional Identity Provider settings…" : "Показать дополнительные настройки провайдера идентификации",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL адрес IdP, куда SP будет оправлять запросы SLO.",
    "Public X.509 certificate of the IdP" : "Открытый сертификат X.509 ldP",
    "Attribute mapping" : "Привязка атрибутов",
    "If you want to optionally map attributes to the user you can configure these here." : "Здесь можно настроить дополнительную привязку атрибутов пользователю.",
    "Show attribute mapping settings…" : "Показать настройки привязки атрибутов…",
    "Security settings" : "Настройки безопасности",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Для повышения безопасности рекомендуем использовать следующие настройки, если они поддерживаются вашим окружением.",
    "Show security settings…" : "Показать настройки безопасности…",
    "Signatures and encryption offered" : "Предложены подписи и шихрование",
    "Signatures and encryption required" : "Требуется подпись и шифрование",
    "Download metadata XML" : "Скачать метаданные XML",
    "Metadata invalid" : "Метаданные не верны",
    "Metadata valid" : "Метаданные верны",
    "Account not provisioned." : "Учётная запись не обслуживается.",
    "Your account is not provisioned, access to this service is thus not possible." : "Ваша учётная запись не обслуживается. Доступ к этой услуге, таким образом, не представляется возможным.",
    "Indicates if the SP will validate all received XMLs." : "Указывает, будет ли SP проверять все полученные XML.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Позволять аутентификацию только если учётная запись существует на другом внутреннем интерфейсе (например, LDAP).",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Убедитесь что настроен пользователь с правами администратора, который может получить доступ к экземпляру через SSO. Вход в систему с обычной учётной записью %s далее будет невозможен.",
    "Show Service Provider settings ..." : "Показать настройки поставщика услуг…",
    "Show optional Identity Provider settings ..." : "Показать дополнительные настройки провайдера идентификации",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Здесь можно настроить дополнительную привязку пользователю атрибутов SAML. ",
    "Show attribute mapping settings ..." : "Показать настройки привязки атрибутов…",
    "Show security settings ..." : "Показать настройки безопасности…"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
