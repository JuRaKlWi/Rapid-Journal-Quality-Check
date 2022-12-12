#install.packages("readxl")
#install.packages("stringi")
#install.packages("rstudioapi")
library(readxl)
library(stringr)
library(plyr)
library(data.table)
library(stringi)
library(rstudioapi)

setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

#############
titel_prep <- function(string) {
  string <- toupper(string)
  string <- gsub(r"{*\([^)]*\)*}", "", string)
  string <- gsub(r"{*\[[^)]*\]*}", "", string)  
  string <- gsub(" AND ", "", string)  
  string <- gsub(" &AMP; ", "", string)  
  string <- gsub("^THE ", "", string)  
  string <- gsub(", THE$", "", string)  
  string <- gsub(", THE$", "", string)  
  string <- stri_trans_general(string, id = "Latin-ASCII")  
  string <- gsub("[^A-Z0-9]", "", string)
}

titel_prep_slim <- function(string) {
  string <- gsub(r"{*\([^)]*\)*}", "", string)
  string <- gsub(r"{*\[[^)]*\]*}", "", string)  
  string <- gsub(" &AMP; ", " & ", string)
  string <- gsub("[\n]", "", string)
  string <- gsub(")", "", string)  
  string <- gsub("\"", "", string)  
  string <- gsub("[^a-zA-Z0-9[[:punct:]]]", "", string)
}


SJR <- as.data.frame( read.table("Ranking Data/scimagojr 2021.csv", header=T, sep=";", dec=".") )
SJR$Issn_offline <- SJR$Issn
SJR$Issn_offline <- gsub(",(.+?)$", "", SJR$Issn_offline)
SJR$Issn_online <- str_extract(SJR$Issn, ",(.+?)$")
SJR$Issn_online <- gsub(", ", "", SJR$Issn_online)

SJR$Title <- titel_prep_slim(SJR$Title)
SJR$Title2 <- titel_prep(SJR$Title)

SJR$SJR_Q <- SJR$SJR.Best.Quartile
SJR$SJR_Hindex <- SJR$H.index
  
SJR.red <- rbind( SJR [!is.na(SJR$"Issn_offline"), c("Title", "Title2", "SJR_Q", "SJR_Hindex")], 
                  SJR [!is.na(SJR$"Issn_online"), c("Title", "Title2", "SJR_Q", "SJR_Hindex")] )

SJR.red$ISSN <- c( SJR$Issn_offline [!is.na(SJR$"Issn_offline")], SJR$Issn_online [!is.na(SJR$"Issn_online")] )

table(SJR.red$SJR_Q)
SJR.red$SJR_Q <- ifelse(SJR.red$SJR_Q %in% c("Q1", "Q2", "Q3", "Q4"), SJR.red$SJR_Q, NA)

table(SJR.red$SJR_Hindex)



VHB <- as.data.frame( read_excel("Ranking Data/VHB_3.xlsx") )
VHB$ISSN <- gsub("-", "", VHB$ISSN)
VHB$ISSN <- gsub("ÿ", "", VHB$ISSN)

VHB$Title <- titel_prep_slim(VHB$Zeitschriften)
VHB$Title2 <- titel_prep(VHB$Zeitschriften)

VHB$VHB <- VHB$JQ3

VHB.red <- VHB [,c("Title", "Title2", "VHB", "ISSN")]

table(VHB.red$VHB)
VHB.red$VHB <- ifelse(VHB.red$VHB %in% c("k.R.", "k.w.Z."), NA, VHB.red$VHB)



FNEGE <- as.data.frame( read_excel("Ranking Data/FNEGE.xlsx") )
FNEGE$ISSN_Offline <- gsub("-", "", FNEGE$ISSN_Offline)
FNEGE$ISSN_Online <- gsub("-", "", FNEGE$ISSN_Online)

FNEGE$Title <- titel_prep_slim(FNEGE$TITLE)
FNEGE$Title2 <- titel_prep(FNEGE$TITLE)

FNEGE$FNEGE <- FNEGE$`Classement 2022`

FNEGE.red <- rbind( FNEGE [!is.na(FNEGE$"ISSN_Offline"), c("Title", "Title2", "FNEGE")], 
                    FNEGE [!is.na(FNEGE$"ISSN_Online"), c("Title", "Title2", "FNEGE")] )

FNEGE.red$ISSN <- c( FNEGE$ISSN_Offline [!is.na(FNEGE$"ISSN_Offline")], FNEGE$ISSN_Online [!is.na(FNEGE$"ISSN_Online")] )

table(FNEGE.red$FNEGE)
FNEGE.red$FNEGE <- ifelse(FNEGE.red$FNEGE %in% c("EM"), NA, FNEGE.red$FNEGE)



HCERES_CoNRS <- as.data.frame( read_excel("Ranking Data/HCERES_CoNRS.xlsx") )
HCERES_CoNRS$ISSN <- gsub("-", "", HCERES_CoNRS$ISSN)

HCERES_CoNRS$Title <- titel_prep_slim(HCERES_CoNRS$Titre)
HCERES_CoNRS$Title2 <- titel_prep(HCERES_CoNRS$Titre)

HCERES_CoNRS$HCERES <- HCERES_CoNRS$HCERES_2021
HCERES_CoNRS$CoNRS <- HCERES_CoNRS$CoNRS_2020

HCERES_CoNRS.red <- HCERES_CoNRS [,c("ISSN", "Title", "Title2", "CoNRS", "HCERES")]

table(HCERES_CoNRS.red$HCERES)
table(HCERES_CoNRS.red$CoNRS)
HCERES_CoNRS.red$CoNRS <- ifelse(HCERES_CoNRS.red$CoNRS %in% c("-"), NA, HCERES_CoNRS.red$CoNRS)




CORE_jour <- as.data.frame( read.csv2("Ranking Data/CORE_journals.csv") )
CORE_jour$ISSN1 <- gsub("-", "", CORE_jour$ISSN1)
CORE_jour$ISSN2 <- gsub("-", "", CORE_jour$ISSN2)
CORE_jour$ISSN3 <- gsub("-", "", CORE_jour$ISSN3)
CORE_jour$ISSN4 <- gsub("-", "", CORE_jour$ISSN4)


CORE_jour$Title <- titel_prep_slim(CORE_jour$title)
CORE_jour$Title2 <- titel_prep(CORE_jour$title)

CORE_jour$CORE <- CORE_jour$rank

CORE_jour.red <- rbind( CORE_jour [!is.na(CORE_jour$"ISSN1"), c("Title", "Title2", "CORE", "source")], 
                        CORE_jour [!is.na(CORE_jour$"ISSN2"), c("Title", "Title2", "CORE", "source")], 
                        CORE_jour [!is.na(CORE_jour$"ISSN3"), c("Title", "Title2", "CORE", "source")],
                        CORE_jour [!is.na(CORE_jour$"ISSN4"), c("Title", "Title2", "CORE", "source")] )

CORE_jour.red$ISSN <- c( CORE_jour$ISSN1 [!is.na(CORE_jour$"ISSN1")], 
                         CORE_jour$ISSN2 [!is.na(CORE_jour$"ISSN2")],
                         CORE_jour$ISSN3 [!is.na(CORE_jour$"ISSN3")], 
                         CORE_jour$ISSN4 [!is.na(CORE_jour$"ISSN4")] )

table(CORE_jour.red$CORE)
CORE_jour.red$CORE <- ifelse(CORE_jour.red$CORE %in% c("A", "A*", "B", "C"), CORE_jour.red$CORE, NA)



CORE_conf <- as.data.frame( read.csv("Ranking Data/CORE.csv", header=F) )

CORE_conf$Title <- titel_prep_slim(CORE_conf$V2)
CORE_conf$Title2 <- titel_prep(CORE_conf$V2)

CORE_conf$V3 <- toupper(CORE_conf$V3)
CORE_conf$V3 <- gsub("[^A-Z0-9]", "", CORE_conf$V3)

CORE_conf$CORE_conf <- CORE_conf$V5

CORE_conf.red <- CORE_conf [,c("Title", "Title2", "CORE_conf")]

CORE_conf.red$CORE_conf <- trimws(CORE_conf.red$CORE_conf, which="both")
  
table(CORE_conf.red$CORE_conf)
CORE_conf.red$CORE_conf <- ifelse(CORE_conf.red$CORE_conf %in% c("A", "A*", "B", "C"), CORE_conf.red$CORE_conf, NA)

table(CORE_conf$V5)
CORE_conf$V5 <- ifelse(CORE_conf$V5 %in% c("A", "A*", "B", "C"), CORE_conf$V5, NA)



DAEN <- as.data.frame( read_excel("Ranking Data/bfi-listen-for-serier-2021.xlsx") )
DAEN$ISSN <- gsub("-", "", DAEN$ISSN)

DAEN$Title <- titel_prep_slim(DAEN$Titel)
DAEN$Title2 <- titel_prep(DAEN$Titel)

DAEN$DAEN <- DAEN$Niveau

DAEN.red <- DAEN [,c("ISSN", "Title", "Title2", "DAEN")]

table(DAEN.red$DAEN)



ABS <- as.data.frame( read_excel("Ranking Data/AJG ABS 2021_v2.xlsx") )
ABS$ISSN <- gsub("-", "", ABS$ISSN)

ABS$Title <- titel_prep_slim(ABS$`Journal Title`)
ABS$Title2 <- titel_prep(ABS$`Journal Title`)

ABS$AJG <- ABS$`AJG 2021`
ABS$JCR <- ABS$`Journal Citation Reports rank`
ABS$SNIP <- ABS$`SNIP rank`
ABS$SJR <- ABS$`SJR rank`
ABS$CiteScore <- ABS$`CiteScore rank`

ABS.red <- ABS [,c("ISSN", "Title", "Title2", "AJG", "JCR", "SNIP", "SJR", "CiteScore")]

table(ABS.red$AJG)
table(ABS.red$JCR)
table(ABS.red$SNIP)
table(ABS.red$SJR)
table(ABS.red$CiteScore)



ABDC <- as.data.frame( read_excel("Ranking Data/abdc_jql_2019_v16.xlsx") )
ABDC$ISSN <- gsub("-", "", ABDC$ISSN)
ABDC$`ISSN Online` <- gsub("-", "", ABDC$`ISSN Online`)

ABDC$Title <- titel_prep_slim(ABDC$`Journal Title`)
ABDC$Title2 <- titel_prep(ABDC$`Journal Title`)

ABDC$ABDC <- ABDC$`2019 Rating`

ABDC.red <- rbind( ABDC [!is.na(ABDC$"ISSN"), c("Title", "Title2", "ABDC")], 
                   ABDC [!is.na(ABDC$"ISSN Online"), c("Title", "Title2", "ABDC")] )

ABDC.red$ISSN <- c( ABDC$ISSN [!is.na(ABDC$"ISSN")], ABDC$"ISSN Online" [!is.na(ABDC$"ISSN Online")] )

table(ABDC.red$ABDC)



CCF <- as.data.frame( read_excel("Ranking Data/CCF.xlsx", col_names = F) )

CCF$Title <- titel_prep_slim(CCF$...2)
CCF$Title2 <- titel_prep(CCF$...2)

CCF$CCF <- CCF$`...1`

CCF.red <- CCF [, c("Title", "Title2", "CCF")]

table(CCF.red$CCF)



FT50 <- as.data.frame( read_excel("Ranking Data/FT50.xlsx") )

FT50$Title <- titel_prep_slim(FT50$...2)
FT50$Title2 <- titel_prep(FT50$...2)

FT50$FT50 <- "FT50" 

FT50.red <- FT50 [, c("Title", "Title2", "FT50")]

table(FT50.red$FT)


# ALL ISSNS
temp <- data.frame("ISSN"=c(SJR.red$ISSN, VHB.red$ISSN, FNEGE.red$ISSN, 
                            HCERES_CoNRS.red$ISSN, CORE_jour.red$ISSN, 
                            DAEN.red$ISSN, ABS.red$ISSN, ABDC.red$ISSN))

ISSNs_Title <- data.frame("ISSN"=temp)
ISSNs_Title$Title <- c(SJR.red$Title, VHB.red$Title, FNEGE.red$Title, 
                       HCERES_CoNRS.red$Title, CORE_jour.red$Title, 
                       DAEN.red$Title, ABS.red$Title, ABDC.red$Title)
ISSNs_Title <- unique(ISSNs_Title)

ISSNs <- data.frame("ISSN"=unique(temp$ISSN))
  
ISSNs <- merge(ISSNs, SJR.red [!duplicated(SJR.red$ISSN), !(colnames(SJR.red) %in% c("Title", "Title2"))], all.x=T, by="ISSN", sort=F)
ISSNs <- merge(ISSNs, VHB.red [!duplicated(VHB.red$ISSN), !(colnames(VHB.red) %in% c("Title", "Title2"))], all.x=T, by="ISSN", sort=F)
ISSNs <- merge(ISSNs, FNEGE.red [!duplicated(FNEGE.red$ISSN), !(colnames(FNEGE.red) %in% c("Title", "Title2"))], all.x=T, by="ISSN", sort=F)
ISSNs <- merge(ISSNs, HCERES_CoNRS.red [!duplicated(HCERES_CoNRS.red$ISSN), !(colnames(HCERES_CoNRS.red) %in% c("Title", "Title2"))], all.x=T, by="ISSN", sort=F)
ISSNs <- merge(ISSNs, CORE_jour.red [!duplicated(CORE_jour.red$ISSN), !(colnames(CORE_jour.red) %in% c("Title", "Title2"))], all.x=T, by="ISSN", sort=F)
ISSNs <- merge(ISSNs, DAEN.red [!duplicated(DAEN.red$ISSN), !(colnames(DAEN.red) %in% c("Title", "Title2"))], all.x=T, by="ISSN", sort=F)
ISSNs <- merge(ISSNs, ABS.red [!duplicated(ABS.red$ISSN), !(colnames(ABS.red) %in% c("Title", "Title2"))], all.x=T, by="ISSN", sort=F)
ISSNs <- merge(ISSNs, ABDC.red [!duplicated(ABDC.red$ISSN), !(colnames(ABDC.red) %in% c("Title", "Title2"))], all.x=T, by="ISSN", sort=F)

ISSNs <- merge(ISSNs, ISSNs_Title, all.x=T, by="ISSN", sort=F)
ISSNs <- ISSNs [(order(ISSNs$Title)), ]
ISSNs <- ISSNs [!duplicated(ISSNs$ISSN), ]


#ALL NAMES
temp <- data.frame("Names"=c(SJR.red$Title2, VHB.red$Title2, FNEGE.red$Title2, HCERES_CoNRS.red$Title2, 
                            CORE_jour.red$Title2, CORE_conf.red$Title2, CCF.red$Title2,
                            DAEN.red$Title2, ABS.red$Title2, ABDC.red$Title2, FT50.red$Title2))

Names_Title <- data.frame("Names"=temp)
Names_Title$Title <- c(SJR.red$Title, VHB.red$Title, FNEGE.red$Title, HCERES_CoNRS.red$Title, 
                       CORE_jour.red$Title, CORE_conf.red$Title, CCF.red$Title,
                       DAEN.red$Title, ABS.red$Title, ABDC.red$Title, FT50.red$Title)
Names_Title <- unique(Names_Title)

Names <- data.frame("Names"=unique(temp$Names))


Names <- merge(Names,  SJR.red [!duplicated(SJR.red$Title2), !(colnames(SJR.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  VHB.red [!duplicated(VHB.red$Title2), !(colnames(VHB.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  FNEGE.red [!duplicated(FNEGE.red$Title2), !(colnames(FNEGE.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  HCERES_CoNRS.red [!duplicated(HCERES_CoNRS.red$Title2), !(colnames(HCERES_CoNRS.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  CORE_jour.red [!duplicated(CORE_jour.red$Title2), !(colnames(CORE_jour.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  CORE_conf.red [!duplicated(CORE_conf.red$Title2), !(colnames(CORE_conf.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  CCF.red [!duplicated(CCF.red$Title2), !(colnames(CCF.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  DAEN.red [!duplicated(DAEN.red$Title2), !(colnames(DAEN.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  ABS.red [!duplicated(ABS.red$Title2), !(colnames(ABS.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  ABDC.red [!duplicated(ABDC.red$Title2), !(colnames(ABDC.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)
Names <- merge(Names,  FT50.red [!duplicated(FT50.red$Title2), !(colnames(FT50.red) %in% c("Title", "ISSN"))], all.x=T, by.x="Names", by.y="Title2", sort=F)

Names <- merge(Names, Names_Title, all.x=T, by="Names", sort=F)
Names <- Names [(order(Names$Title)), ]
Names <- Names [!duplicated(Names$Names), ]


#ALL ACRONYMS CORE_conf
temp <- data.frame("Acro"=c(CORE_conf$V3))

Acro_Title <- data.frame("Acro"=temp)
Acro_Title$Title <- CORE_conf.red$Title
Acro_Title <- unique(Acro_Title)

Acro <- data.frame("Acro"=unique(temp$Acro))


Acro <- merge(Acro,  CORE_conf [!duplicated(CORE_conf$V3), (colnames(CORE_conf) %in% c("V3", "V5"))], all.x=T, by.x="Acro", by.y="V3", sort=F)

Acro <- merge(Acro, Acro_Title, all.x=T, by="Acro", sort=F)
Acro <- Acro [(order(Acro$Acro)), ]
Acro <- Acro [!duplicated(Acro$Acro), ]



ISSNs.txt <- apply(ISSNs, 1, function(x) paste("\"", paste(x, collapse="\t"), "\\n\" + ") )

fileConn<-file("ISSNs.txt")
writeLines(ISSNs.txt, fileConn)
close(fileConn)


Names.txt <- apply(Names, 1, function(x) paste("\"", paste(x, collapse="\t"), "\\n\" + ") )

fileConn<-file("Names.txt")
writeLines(Names.txt, fileConn, sep="\n")
close(fileConn)


Acro.txt <- apply(Acro, 1, function(x) paste("\"", paste(x, collapse="\t"), "\\n\" + ") )

fileConn<-file("Acro.txt")
writeLines(Acro.txt, fileConn)
close(fileConn)


b <- c(1:17) [-17]
n <- substr(colnames(ISSNs), 1, 5) [-17]
ISSNs.FullRank.txt <- c("ccf.FullRank_ISSNs = \" ", c( paste(n, "\\", b, "/", collapse=" ", sep=""), "X_X"), 
                        apply(ISSNs [,1:16], 1, function(x) 
                        #paste( paste( x, " < ", b, "-", n, "-", b, collapse=" -- ", sep=""), "X_X") ), " \" ")
                        paste( paste( trimws(x), "\\", b, "/", collapse="", sep=""), "X_X", sep="") ), " \" ")

fileConn<-file("ccf.FullRank_ISSNs.js")
writeLines(ISSNs.FullRank.txt, fileConn, sep="", useBytes=T)
close(fileConn)


b <- c(1:20) [-20]
n <- substr(colnames(Names), 1, 6) [-20]
Names.FullRank.txt <- c("ccf.FullRank_Names = \" ", c( paste(n, "\\", b, "/", collapse=" ", sep=""), "X_X"), 
                        apply(Names [1:19], 1, function(x) 
                        paste( paste( trimws(x), "\\", b, "/", collapse="", sep=""), "X_X", sep="") ), " \" ")

fileConn<-file("ccf.FullRank_Names.js")
writeLines(Names.FullRank.txt, fileConn, sep="", useBytes=T)
close(fileConn)


b <- c(1:3)
n <- substr(colnames(Acro), 1, 6)
Acro.FullRank.txt <- c("ccf.FullRank_Acro = \" ", c( paste(n, "\\", b, "/", collapse=" ", sep=""), "X_X"), 
                        apply(Acro [1:3], 1, function(x) 
                          paste( paste( trimws(x), "\\", b, "/", collapse="", sep=""), "X_X", sep="") ), " \" ")

fileConn<-file("ccf.FullRank_Acro.js")
writeLines(Acro.FullRank.txt, fileConn, sep="", useBytes=T)
close(fileConn)


# Show all ranks
all_ranks_Names <- c( 
names(table(Names [,2])), 
names(table(Names [,4])),
names(table(Names [,5])),
names(table(Names [,6])),
names(table(Names [,7])),
names(table(Names [,8])),
names(table(Names [,10])),
names(table(Names [,11])),
names(table(Names [,12])),
names(table(Names [,13])),
names(table(Names [,18])),
names(table(Names [,19])))

all_ranks_ISSNs <- c(
names(table(ISSNs [,2])),
names(table(ISSNs [,4])),
names(table(ISSNs [,5])),
names(table(ISSNs [,6])),
names(table(ISSNs [,7])),
names(table(ISSNs [,8])),
names(table(ISSNs [,10])),
names(table(ISSNs [,11])),
names(table(ISSNs [,16])))

all_ranks_Names
all_ranks_ISSNs
