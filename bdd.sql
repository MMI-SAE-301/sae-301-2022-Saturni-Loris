-- code pour la création des tables
--
-- create table Montre (
-- id uuid not null default
-- uuid_generate_v4() ,
-- ecran text,
-- bouton text,
-- cadran text,
-- bracelet_haut text,
-- bracelet_bas text,
-- Commander boolean not null default
-- false,
-- utilisateur uuid references auth.users
-- not null default uid(),
-- primary key (id) ) ;



-- code pour la création des vues
--




-- code pour la création des policies
--
-- Enable update for users based on email:
--     USING expression: (uid() = utilisateur)
--     WITH CHECK expression: (uid() IN ( SELECT montre_1.utilisateur AS id_user FROM montre montre_1))

-- Enable insert for authenticated users only:
--     Target roles: authenticated
--     WITH CHECK expression: true

-- Enable read access for all users:
--     Target roles: default to a role is none selected
--     USING expression: true

