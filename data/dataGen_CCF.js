/**
 * MIT License
 *
 * Copyright (c) 2022 Julian R.K. Wichmann building upon 
 *                                            WenyanLiu (https://github.com/WenyanLiu/CCFrank4dblp), Kai Chen (https://github.com/FunClip)
 */


const ccfRankList_CCF =
    "A		ACM Transactions on Computer Systems		\n" +
    "A		ACM Transactions on Storage		\n" +
    "A		IEEE Transactions On Computer-Aided Design Of Integrated Circuits And System		\n" +
    "A		IEEE Transactions on Computers		\n" +
    "A		IEEE Transactions on Parallel and Distributed Systems		\n" +
    "B		ACM Transactions on Architecture and Code Optimization		\n" +
    "B		ACM Transactions on Autonomous and Adaptive Systems		\n" +
    "B		ACM Transactions on Design Automation of Electronic Systems		\n" +
    "B		ACM Transactions on Embedded Computing Systems		\n" +
    "B		ACM Transactions on Reconfigurable Technology and Systems		\n" +
    "B		IEEE Transactions on Very Large Scale Integration (VLSI) Systems		\n" +
    "B		Journal of Parallel and Distributed Computing		\n" +
    "B		Journal of Systems Architecture: Embedded Software Design		\n" +
    "B		Parallel Computing		\n" +
    "B		Performance Evaluation: An International Journal		\n" +
    "C		ACM Journal on Emerging Technologies in Computing Systems		\n" +
    "C		Concurrency and Computation: Practice and Experience		\n" +
    "C		Distributed Computing		\n" +
    "C		Future Generation Computer Systems		\n" +
    "C		IEEE Transactions on Cloud Computing		\n" +
    "C		Integration, the VLSI Journal		\n" +
    "C		Journal of Electronic Testing-Theory and Applications		\n" +
    "C		The Journal of Grid computing		\n" +
    "C		Microprocessors and Microsystems: Embedded Hardware Design		\n" +
    "C		Real-Time Systems		\n" +
    "C		The Journal of Supercomputing		\n" +
    "A		ACM SIGPLAN Symposium on Principles & Practice of Parallel Programming		\n" +
    "A		Conference on File and Storage Technologies		\n" +
    "A		Design Automation Conference		\n" +
    "A		High-Performance Computer Architecture		\n" +
    "A		IEEE/ACM International Symposium on Microarchitecture		\n" +
    "A		International Conference for High Performance Computing, Networking, Storage, and Analysis		\n" +
    "A		International Conference on Architectural Support for Programming Languages and Operating Systems		\n" +
    "A		International Symposium on Computer Architecture		\n" +
    "A		USENIX Annual Technical Conference		\n" +
    "B		ACM Symposium on Cloud Computing		\n" +
    "B		ACM Symposium on Parallelism in Algorithms and Architectures		\n" +
    "B		ACM Symposium on Principles of Distributed Computing		\n" +
    "B		ACM/SIGDA International Symposium on Field-Programmable Gate Arrays		\n" +
    "B		Code Generation and Optimization		\n" +
    "B		Design, Automation & Test in Europe		\n" +
    "B		European Conference on Computer Systems		\n" +
    "B		ACM Symposium on High Performance Chips		\n" +
    "B		IEEE International Conference on Cluster Computing		\n" +
    "B		International Conference on Computer Design		\n" +
    "B		International Conference on Computer-Aided Design		\n" +
    "B		International Conference on Distributed Computing Systems		\n" +
    "B		International Conference on Hardware/Software Co-design and System Synthesis		\n" +
    "B		International Conference on High Performance and Embedded Architectures and Compilers		\n" +
    "B		International Conference on Measurement and Modeling of Computer Systems		\n" +
    "B		International Conference on Parallel Architectures and Compilation Techniques		\n" +
    "B		International Conference on Parallel Architectures and Compilation Techniques		\n" +
    "B		International Conference on Parallel Processing		\n" +
    "B		International Conference on Supercomputing		\n" +
    "B		International Conference on Virtual Execution Environments		\n" +
    "B		International Parallel & Distributed Processing Symposium		\n" +
    "B		International Symposium on Computer Performance, Modeling, Measurements and Evaluation		\n" +
    "B		International Symposium on High Performance Distributed Computing		\n" +
    "B		International Test Conference		\n" +
    "B		Large Installation system Administration Conference		\n" +
    "B		Mass Storage Systems and Technologies		\n" +
    "B		Real-Time and Embedded Technology and Applications Symposium		\n" +
    "C		ACM International Conference on Computing Frontiers		\n" +
    "C		ACM International Systems and Storage Conference		\n" +
    "C		ACM/IEEE International Symposium on Networks-on-Chip		\n" +
    "C		Application-Specific Systems, Architectures, and Processors		\n" +
    "C		Asia and South Pacific Design Automation Conference		\n" +
    "C		European Conference on Parallel and Distributed Computing		\n" +
    "C		European Test Symposium		\n" +
    "C		Field Programmable Logic and Applications		\n" +
    "C		Field-Programmable Custom Computing Machines		\n" +
    "C		Great Lakes Symposium on VLSI		\n" +
    "C		IEEE Asian Test Symposium		\n" +
    "C		IEEE International Conference on High Performance Computing and Communications		\n" +
    "C		IEEE International Conference on High Performance Computing, Data and Analytics		\n" +
    "C		IEEE International Symposium on Modeling, Analysis, and Simulation of Computer and Telecommunication Systems		\n" +
    "C		IEEE International Symposium on Parallel and Distributed Processing with Applications		\n" +
    "C		IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing		\n" +
    "C		IFIP International Conference on Network and Parallel Computing		\n" +
    "C		International Conference on Algorithms and Architectures for Parallel Processing		\n" +
    "C		International Conference on Compilers, Architectures, and Synthesis for Embedded Systems		\n" +
    "C		International Conference on Field-Programmable Technology		\n" +
    "C		International Conference on Field-Programmable Technology		\n" +
    "C		International Conference on Parallel and Distributed Systems		\n" +
    "C		International Symposium on Circuits and Systems		\n" +
    "C		International Symposium on Low Power Electronics and Design		\n" +
    "C		International Symposium on Physical Design		\n" +
    "C		Symposium on High-Performance Interconnects		\n" +
    "C		VLSI Test Symposium		\n" +
    "A		IEEE Journal of Selected Areas in Communications		\n" +
    "A		IEEE Transactions on Mobile Computing		\n" +
    "A		IEEE/ACM Transactions on Networking		\n" +
    "B		ACM Transactions on Internet Technology		\n" +
    "B		ACM Transactions on Multimedia Computing, Communications and Applications		\n" +
    "B		ACM Transactions on Sensor Networks		\n" +
    "B		Computer Networks		\n" +
    "B		IEEE Transactions on Communications		\n" +
    "B		IEEE Transactions on Wireless Communications		\n" +
    "C		Ad hoc Networks		\n" +
    "C		Computer Communications		\n" +
    "C		IEEE Transactions on Network and Service Management		\n" +
    "C		IET Communications		\n" +
    "C		Journal of Network and Computer Applications		\n" +
    "C		Mobile Networks & Applications		\n" +
    "C		Networks		\n" +
    "C		Peer-to-Peer Networking and Applications		\n" +
    "C		Wireless Communications & Mobile Computing		\n" +
    "C		Wireless Networks		\n" +
    "A		ACM International Conference on Applications, Technologies, Architectures, and Protocols for Computer Communication		\n" +
    "A		ACM International Conference on Mobile Computing and Networking		\n" +
    "A		IEEE International Conference on Computer Communications		\n" +
    "A		Symposium on Network System Design and Implementation		\n" +
    "B		ACM Conference on Embedded Networked Sensor Systems		\n" +
    "B		ACM International Conference on emerging Networking EXperiments and Technologies		\n" +
    "B		IEEE Communications Society Conference on Sensor and Ad Hoc Communications and Networks		\n" +
    "B		International Conference on Information Processing in Sensor Networks		\n" +
    "B		International Conference on Mobile Systems, Applications, and Services		\n" +
    "B		International Conference on Network Protocols		\n" +
    "B		International Symposium on Mobile Ad Hoc Networking and Computing		\n" +
    "B		International Workshop on Network and Operating System Support for Digital Audio and Video		\n" +
    "B		International Workshop on Quality of Service		\n" +
    "B		Internet Measurement Conference		\n" +
    "C		Architectures for Networking and Communications Systems		\n" +
    "C		Asia-Pacific Network Operations and Management Symposium		\n" +
    "C		Formal Techniques for Networked and Distributed Systems		\n" +
    "C		IEEE Conference on Local Computer Networks		\n" +
    "C		IEEE Global Communications Conference		\n" +
    "C		IEEE International Conference on Communications		\n" +
    "C		IEEE International Conference on Computer Communications and Networks		\n" +
    "C		IEEE International Conference on Mobile Ad-hoc and Sensor Systems		\n" +
    "C		IEEE International Conference on P2P Computing		\n" +
    "C		IEEE International Performance Computing and Communications Conference		\n" +
    "C		IEEE International Symposium on a World of Wireless Mobile and Multimedia Networks		\n" +
    "C		IEEE Symposium on Computers and Communications		\n" +
    "C		IEEE Wireless Communications & Networking Conference		\n" +
    "C		IFIP International Conferences on Networking		\n" +
    "C		IFIP/IEEE International Symposium on Integrated Network Management		\n" +
    "C		International Conference on Mobile Ad-hoc and Sensor Networks		\n" +
    "C		International Conference on Modeling, Analysis and Simulation of Wireless and Mobile Systems		\n" +
    "C		International Conference on Wireless Algorithms, Systems, and Applications		\n" +
    "C		The Workshop on Hot Topics in Networks		\n" +
    "A		IEEE Transactions on Dependable and Secure Computing		\n" +
    "A		IEEE Transactions on Information Forensics and Security		\n" +
    "A		Journal of Cryptology		\n" +
    "B		ACM Transactions on Privacy and Security		\n" +
    "B		Computers & Security		\n" +
    "B		Designs, Codes and Cryptography		\n" +
    "B		Journal of Computer Security		\n" +
    "C		Computer Law and Security Review		\n" +
    "C		EURASIP Journal on Information Security		\n" +
    "C		IET Information Security		\n" +
    "C		Information Management & Computer Security		\n" +
    "C		International Journal of Information and Computer Security		\n" +
    "C		International Journal of Information Security and Privacy		\n" +
    "C		Journal of Information Security and Application		\n" +
    "C		Security and Communication Networks		\n" +
    "A		ACM Conference on Computer and Communications Security		\n" +
    "A		European Cryptology Conference		\n" +
    "A		IEEE Symposium on Security and Privacy		\n" +
    "A		International Cryptology Conference		\n" +
    "A		Usenix Security Symposium		\n" +
    "B		Annual Computer Security Applications Conference		\n" +
    "B		Annual International Conference on the Theory and Application of Cryptology and Information Security		\n" +
    "B		European Symposium on Research in Computer Security		\n" +
    "B		Fast Software Encryption		\n" +
    "B		IEEE Computer Security Foundations Workshop		\n" +
    "B		IEEE International Symposium on Reliable Distributed Systems		\n" +
    "B		International Conference on Cryptographic Hardware and Embedded Systems		\n" +
    "B		International Conference on Dependable Systems and Networks		\n" +
    "B		International Symposium on Recent Advances in Intrusion Detection		\n" +
    "B		International Workshop on Practice and Theory in Public Key Cryptography		\n" +
    "B		ISOC Network and Distributed System Security Symposium		\n" +
    "B		Theory of Cryptography Conference		\n" +
    "C		ACM Conference on Security and Privacy in Wireless and Mobile Networks		\n" +
    "C		ACM Symposium on Access Control Models and Technologies		\n" +
    "C		ACM Workshop on Digital Rights Management		\n" +
    "C		ACM Workshop on Information Hiding and Multimedia Security		\n" +
    "C		ACM Workshop on Information Hiding and Multimedia Security		\n" +
    "C		Applied Cryptography and Network Security		\n" +
    "C		Asia Conference on Computer and Communications Security		\n" +
    "C		Asia Conference on Computer and Communications Security		\n" +
    "C		AustralasiaConferenceonInformation SecurityandPrivacy		\n" +
    "C		RSA Conference, Cryptographers' Track		\n" +
    "C		Detection of Intrusions and Malware &Vulnerability Assessment		\n" +
    "C		Digital Forensic Research Workshop		\n" +
    "C		Financial Cryptography and Data Security		\n" +
    "C		IEEE International Conference on Trust,Security and Privacy in Computing and Communications		\n" +
    "C		IFIP International Information Security Conference		\n" +
    "C		IFIP WG 11.9 International Conference on Digital Forensics		\n" +
    "C		Information Security Conference		\n" +
    "C		Information Security Conference		\n" +
    "C		International Conference on Digital Forensics & Cyber Crime		\n" +
    "C		International Conference on Information and Communications Security		\n" +
    "C		International Conference on Security and Privacy in Communication Networks		\n" +
    "C		New Security Paradigms Workshop		\n" +
    "C		Passive and Active Measurement Conference		\n" +
    "C		Privacy Enhancing Technologies Symposium		\n" +
    "C		Privacy Enhancing Technologies Symposium		\n" +
    "C		Selected Areas in Cryptography		\n" +
    "C		Symposium On Usable Privacy and Security		\n" +
    "C		USENIX Workshop on Hot Topics in Security		\n" +
    "A		ACM Transactions on Programming Languages & Systems		\n" +
    "A		ACM Transactions on Software Engineering and Methodology		\n" +
    "A		IEEE Transactions on Software Engineering		\n" +
    "B		Automated Software Engineering		\n" +
    "B		Empirical Software Engineering		\n" +
    "B		IEEE Transactions on Service Computing		\n" +
    "B		IET Software		\n" +
    "B		Information and Software Technology		\n" +
    "B		Journal of Functional Programming		\n" +
    "B		Journal of Software: Evolution and Process		\n" +
    "B		Journal of Systems and Software		\n" +
    "B		Requirements Engineering		\n" +
    "B		Science of Computer Programming		\n" +
    "B		Software and System Modeling		\n" +
    "B		Software Testing, Verification and Reliability		\n" +
    "B		Software: Practice and Experience		\n" +
    "C		Computer Languages, Systems and Structures		\n" +
    "C		International Journal on Software Engineering and Knowledge Engineering		\n" +
    "C		International Journal on Software Tools for Technology Transfer		\n" +
    "C		Journal of Logic and Algebraic Programming		\n" +
    "C		Journal of Logic and Algebraic Programming		\n" +
    "C		Journal of Web Engineering		\n" +
    "C		Service Oriented Computing and Applications		\n" +
    "C		Software Quality Journal		\n" +
    "C		Theory and Practice of Logic Programming		\n" +
    "A		ACM SIGPLAN Symposium on Programming Language Design & Implementation		\n" +
    "A		ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages		\n" +
    "A		ACM SIGSOFT Symposium on the Foundation of Software Engineering/ European Software Engineering Conference		\n" +
    "A		ACM Symposium on Operating Systems Principles		\n" +
    "A		Conference on Object-Oriented Programming Systems, Languages,and Applications		\n" +
    "A		International Conference on Automated Software Engineering		\n" +
    "A		International Conference on Automated Software Engineering		\n" +
    "A		International Conference on Software Engineering		\n" +
    "A		International Symposium on Software Testing and Analysis		\n" +
    "A		USENIX Symposium on Operating Systems Design and Implementations		\n" +
    "B		European Conference on Object-Oriented Programming		\n" +
    "B		European Joint Conferences on Theory and Practice of Software		\n" +
    "B		European Joint Conferences on Theory and Practice of Software		\n" +
    "B		European Joint Conferences on Theory and Practice of Software		\n" +
    "B		European Joint Conferences on Theory and Practice of Software		\n" +
    "B		European Joint Conferences on Theory and Practice of Software		\n" +
    "B		European Joint Conferences on Theory and Practice of Software		\n" +
    "B		IEEE International Conference on Program Comprehension		\n" +
    "B		IEEE International Conference on Program Comprehension		\n" +
    "B		IEEE International Requirement Engineering Conference		\n" +
    "B		IEEE International Requirement Engineering Conference		\n" +
    "B		International Conference on Advanced Information Systems Engineering		\n" +
    "B		International Conference on Function Programming		\n" +
    "B		International Conference on Languages,Compilers, Tools and Theory for Embedded Systems		\n" +
    "B		International Conference on Model Driven Engineering Languages and Systems		\n" +
    "B		International Conference on Principles and Practice of Constraint Programming		\n" +
    "B		International Conference on Service Oriented Computing		\n" +
    "B		International Conference on Software Analysis, Evolution, and Reengineering		\n" +
    "B		International Conference on Software Analysis, Evolution, and Reengineering		\n" +
    "B		International Conference on Software Maintenance and Evolution		\n" +
    "B		International Conference on Software Maintenance and Evolution		\n" +
    "B		International Conference on Verification,Model Checking, and Abstract Interpretation		\n" +
    "B		International Conference on Web Services(Research Track)		\n" +
    "B		International Middleware Conference		\n" +
    "B		International Static Analysis Symposium		\n" +
    "B		International Symposium on Empirical Software Engineering and Measurement		\n" +
    "B		International Symposium on Formal Methods		\n" +
    "B		International Symposium on Software Reliability Engineering		\n" +
    "B		USENIX Workshop on Hot Topics in Operating Systems		\n" +
    "C		ACM SIGPLAN Workshop on Partial Evaluation and Program Manipulation		\n" +
    "C		ACMSIGPLAN-SIGSOFT Workshop on Program Analysis for Software Tools and Engineering		\n" +
    "C		Asian Symposium on Programming Languages and Systems		\n" +
    "C		Asia-Pacific Software Engineering Conference		\n" +
    "C		Evaluation and Assessment in Software Engineering		\n" +
    "C		IEEE International Conference on Engineering of Complex Computer Systems		\n" +
    "C		IEEE International Conference on Software Testing, Verification and Validation		\n" +
    "C		IEEE International Symposium on Performance Analysis of Systems and Software		\n" +
    "C		IEEE International Working Conference on Source Code Analysis and Manipulation		\n" +
    "C		International Computer Software and Applications Conference		\n" +
    "C		International Conference on Formal Engineering Methods		\n" +
    "C		International Conference on Objects, Models, Components, Patterns		\n" +
    "C		International Conference on Quality Software		\n" +
    "C		International Conference on Service Computing		\n" +
    "C		International Conference on Software and System Process		\n" +
    "C		International Conference on Software and System Process		\n" +
    "C		International Conference on Software Engineering and Knowledge Engineering		\n" +
    "C		International Conference on Software Quality, Reliability and Security		\n" +
    "C		International Conference on Software Reuse		\n" +
    "C		International Conference on Web Engineering		\n" +
    "C		International SPIN Workshop on Model Checking of Software		\n" +
    "C		International Symposium on Automated Technology for Verification and Analysis		\n" +
    "C		International Symposium on Logic-based Program Synthesis and Transformation		\n" +
    "C		International Symposium on Theoretical Aspects of Software Engineering		\n" +
    "C		Mining Software Repositories		\n" +
    "C		Requirements Engineering: Foundation for Software Quality		\n" +
    "C		Working IEEE/IFIP Conference on Software Architecture		\n" +
    "A		ACM Transactions on Database Systems		\n" +
    "A		ACM Transactions on Information Systems		\n" +
    "A		IEEE Transactions on Knowledge and Data Engineering		\n" +
    "A		The VLDB Journal		\n" +
    "B		ACM Transactions on Knowledge Discovery from Data		\n" +
    "B		ACM Transactions on the Web		\n" +
    "B		Advanced Engineering Informatics		\n" +
    "B		Data and Knowledge Engineering		\n" +
    "B		Data Mining and Knowledge Discovery		\n" +
    "B		European Journal of Information Systems		\n" +
    "B		GeoInformatica		\n" +
    "B		Information Processing and Management		\n" +
    "B		Information Sciences		\n" +
    "B		Information Systems		\n" +
    "B		Journal of the American Society for Information Science and Technology		\n" +
    "B		Journal of Web Semantics		\n" +
    "B		Knowledge and Information Systems		\n" +
    "C		Distributed and Parallel Databases		\n" +
    "C		Information and Management		\n" +
    "C		Information Processing Letters		\n" +
    "C		Information Retrieval Journal		\n" +
    "C		International Journal of Cooperative Information Systems		\n" +
    "C		International Journal of Geographical Information Science		\n" +
    "C		International Journal of Intelligent Systems		\n" +
    "C		International Journal of Knowledge Management		\n" +
    "C		International Journal on Semantic Web and Information Systems		\n" +
    "C		Journal of Computer Information Systems		\n" +
    "C		Journal of Database Management		\n" +
    "C		Journal of Global Information Technology Management		\n" +
    "C		Journal of Intelligent Information Systems		\n" +
    "C		Journal of Strategic Information Systems		\n" +
    "A		ACM Conference on Management of Data		\n" +
    "A		ACM Knowledge Discovery and Data Mining		\n" +
    "A		IEEE International Conference on Data Engineering		\n" +
    "A		International Conference on Research on Development in Information Retrieval		\n" +
    "A		International Conference on Very Large Data Bases		\n" +
    "A		International Conference on Very Large Data Bases		\n" +
    "B		ACM International Conference on Information and Knowledge Management		\n" +
    "B		ACM International Conference on Web Search and Data Mining		\n" +
    "B		ACM Symposium on Principles of Database Systems		\n" +
    "B		Database Systems for Advanced Applications		\n" +
    "B		European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases		\n" +
    "B		IEEE International Semantic Web Conference		\n" +
    "B		International Conference on Data Mining		\n" +
    "B		International Conference on Database Theory		\n" +
    "B		International Conference on Extending DB Technology		\n" +
    "B		International Conference on Innovative Data Systems Research		\n" +
    "B		SIAM International Conference on Data Mining		\n" +
    "C		Asia Pacific Web Conference		\n" +
    "C		Database and Expert System Applications		\n" +
    "C		European Conference on IR Research		\n" +
    "C		Extended Semantic Web Conference		\n" +
    "C		International ACM Workshop on Web and Databases		\n" +
    "C		International Conference on Conceptual Modeling		\n" +
    "C		International Conference on Mobile Data Management		\n" +
    "C		International Conference on Scientific and Statistical DB Management		\n" +
    "C		International Conference on Web Age Information Management		\n" +
    "C		International Symposium on Spatial and Temporal Databases		\n" +
    "C		Pacific-Asia Conference on Knowledge Discovery and Data Mining		\n" +
    "C		Web Information Systems Engineering		\n" +
    "A		IEEE Transactions on Information Theory		\n" +
    "A		Information and Computation		\n" +
    "A		SIAM Journal on Computing		\n" +
    "B		ACM Transactions on Algorithms		\n" +
    "B		ACM Transactions on Computational Logic		\n" +
    "B		ACM Transactions on Mathematical Software		\n" +
    "B		Algorithmica		\n" +
    "B		Computational complexity		\n" +
    "B		Formal Aspects of Computing		\n" +
    "B		Formal Methods in System Design		\n" +
    "B		INFORMS Journal on Computing		\n" +
    "B		Journal of Computer and System Sciences		\n" +
    "B		Journal of Global Optimization		\n" +
    "B		Journal of Symbolic Computation		\n" +
    "B		Mathematical Structures in Computer Science		\n" +
    "B		Theoretical Computer Science		\n" +
    "C		Acta Informatica		\n" +
    "C		Annals of Pure and Applied Logic		\n" +
    "C		Discrete Applied Mathematics		\n" +
    "C		Fundamenta Informaticae		\n" +
    "C		Higher-Order and Symbolic Computation		\n" +
    "C		Information Processing Letters		\n" +
    "C		Journal of Complexity		\n" +
    "C		Journal of Logic and Computation		\n" +
    "C		Journal of Symbolic Logic		\n" +
    "C		Logical Methods in Computer Science		\n" +
    "C		SIAM Journal on Discrete Mathematics		\n" +
    "C		Theory of Computing Systems		\n" +
    "A		ACM Symposium on Theory of Computing		\n" +
    "A		ACM-SIAM Symposium on Discrete Algorithms		\n" +
    "A		Computer Aided Verification		\n" +
    "A		IEEE Annual Symposium on Foundations of Computer Science		\n" +
    "A		IEEE Symposium on Logic in Computer Science		\n" +
    "B		ACM Symposium on Computational Geometry		\n" +
    "B		European Symposium on Algorithms		\n" +
    "B		IEEE Conference on Computational Complexity		\n" +
    "B		International Colloquium on Automata, Languages and Programming		\n" +
    "B		International Conference on Automated Deduction/International Joint Conference on Automated Reasoning		\n" +
    "B		International Conference on Automated Deduction/International Joint Conference on Automated Reasoning		\n" +
    "B		International Conference on Concurrency Theory		\n" +
    "B		International Conference on Hybrid Systems: Computation and Control		\n" +
    "B		Theory and Applications of Satisfiability Testing		\n" +
    "C		Computer Science Logic		\n" +
    "C		Formal Method in Computer-Aided Design		\n" +
    "C		Foundations of Software Technology and Theoretical Computer Science		\n" +
    "C		IEEE International Conference on Data Science and Advanced Analytics		\n" +
    "C		International Colloquium on Theoretical Aspects of Computing		\n" +
    "C		International Conference on Integer Programming and Combinatorial Optimization		\n" +
    "C		International Conference on Rewriting Techniques and Applications		\n" +
    "C		International Symposium on Algorithms and Computation		\n" +
    "C		Mathematical Foundations of Computer Science		\n" +
    "C		Symposium on Theoretical Aspects of Computer Science		\n" +
    "A		ACM Transactions on Graphics		\n" +
    "A		IEEE Transactions on Image Processing		\n" +
    "A		IEEE Transactions on Visualization and Computer Graphics		\n" +
    "B		ACM Transactions on Multimedia Computing,Communications and Application		\n" +
    "B		Computer Aided Geometric Design		\n" +
    "B		Computer Graphics Forum		\n" +
    "B		Computer-Aided Design		\n" +
    "B		Graphical Models		\n" +
    "B		IEEE Transactions on Circuits and Systems for Video Technology		\n" +
    "B		IEEE Transactions on Multimedia		\n" +
    "B		Journal of The Acoustical Society of America		\n" +
    "B		SIAM Journal on Imaging Sciences		\n" +
    "B		Speech Communication		\n" +
    "C		Computational Geometry: Theory and Applications		\n" +
    "C		Computer Animation and Virtual Worlds		\n" +
    "C		Computers & Graphics		\n" +
    "C		Discrete & Computational Geometry		\n" +
    "C		IEEE Signal Processing Letters		\n" +
    "C		IET Image Processing		\n" +
    "C		Journal of Visual Communication and Image Representation		\n" +
    "C		Multimedia Systems		\n" +
    "C		Multimedia Tools and Applications		\n" +
    "C		Signal Processing		\n" +
    "C		Signal Processing: Image Communication		\n" +
    "C		The Visual Computer		\n" +
    "A		ACM International Conference on Multimedia		\n" +
    "A		ACM SIGGRAPH Annual Conference		\n" +
    "A		IEEE Virtual Reality		\n" +
    "A		IEEE Visualization Conference		\n" +
    "B		ACM SIGMM International Conference on Multimedia Retrieval		\n" +
    "B		ACM SIGMM International Conference on Multimedia Retrieval		\n" +
    "B		ACM Symposium on Interactive 3D Graphics		\n" +
    "B		ACM/Eurographics Symposium on Computer Animation		\n" +
    "B		Data Compression Conference		\n" +
    "B		Eurographics		\n" +
    "B		Eurographics Conference on Visualization		\n" +
    "B		Eurographics Symposium on Geometry Processing		\n" +
    "B		Eurographics Symposium on Rendering		\n" +
    "B		Eurographics Symposium on Rendering		\n" +
    "B		IEEE International Conference on Acoustics,Speech and SP		\n" +
    "B		IEEE International Conference on Multimedia& Expo		\n" +
    "B		International Symposium on Mixed and Augmented Reality		\n" +
    "B		Pacific Graphics: The Pacific Conference on Computer Graphics and Applications		\n" +
    "B		Symposium on Solid and Physical Modeling		\n" +
    "B		Symposium on Solid and Physical Modeling		\n" +
    "C		ACM Symposium on Virtual Reality Software and Technology		\n" +
    "C		Computer Animation and Social Agents		\n" +
    "C		Computer Graphics International		\n" +
    "C		Conference of the International SpeechCommunication Association		\n" +
    "C		Geometric Modeling and Processing		\n" +
    "C		IEEE Pacific Visualization Symposium		\n" +
    "C		IEEE Pacific Visualization Symposium		\n" +
    "C		International Conference on 3D Vision		\n" +
    "C		International Conference on Computer-Aided Design and Computer Graphics		\n" +
    "C		International Conference on Image Processing		\n" +
    "C		International Conference on Multimedia Modeling		\n" +
    "C		Pacific-Rim Conference on Multimedia		\n" +
    "C		Shape Modeling International		\n" +
    "A		Artificial Intelligence		\n" +
    "A		IEEE Trans on Pattern Analysis and Machine Intelligence		\n" +
    "A		International Journal of Computer Vision		\n" +
    "A		Journal of Machine Learning Research		\n" +
    "B		ACM Transactions on Applied Perception		\n" +
    "B		ACM Transactions on Speech and Language Processing		\n" +
    "B		Autonomous Agents and Multi-Agent Systems		\n" +
    "B		Computational Linguistics		\n" +
    "B		Computer Vision and Image Understanding		\n" +
    "B		Data and Knowledge Engineering		\n" +
    "B		Evolutionary Computation		\n" +
    "B		IEEE Transactions on Affective Computing		\n" +
    "B		IEEE Transactions on Audio, Speech, and Language Processing		\n" +
    "B		IEEE Transactions on Cybernetics		\n" +
    "B		IEEE Transactions on Cybernetics		\n" +
    "B		IEEE Transactions on Evolutionary Computation		\n" +
    "B		IEEE Transactions on Fuzzy Systems		\n" +
    "B		IEEE Transactions on Neural Networks and learning systems		\n" +
    "B		International Journal of Approximate Reasoning		\n" +
    "B		Journal of Artificial Intelligence Research		\n" +
    "B		Journal of Automated Reasoning		\n" +
    "B		Journal of Speech, Language, and Hearing Research		\n" +
    "B		Machine Learning		\n" +
    "B		Neural Computation		\n" +
    "B		Neural Networks		\n" +
    "B		Pattern Recognition		\n" +
    "C		ACM Transactions on Asian and Low-Resource Language Information Processing		\n" +
    "C		Applied Intelligence		\n" +
    "C		Artificial Intelligence in Medicine		\n" +
    "C		Artificial Life		\n" +
    "C		Computational Intelligence		\n" +
    "C		Computer Speech and Language		\n" +
    "C		Connection Science		\n" +
    "C		Decision Support Systems		\n" +
    "C		Engineering Applications of Artificial Intelligence		\n" +
    "C		Expert Systems		\n" +
    "C		Expert Systems with Applications		\n" +
    "C		Fuzzy Sets and Systems		\n" +
    "C		IEEE Transactions on Games		\n" +
    "C		IET Computer Vision		\n" +
    "C		IET Signal Processing		\n" +
    "C		Image and Vision Computing		\n" +
    "C		Intelligent Data Analysis		\n" +
    "C		International Journal of Computational Intelligence and Applications		\n" +
    "C		International Journal of Intelligent Systems		\n" +
    "C		International Journal of Neural Systems		\n" +
    "C		International Journal of Pattern Recognition and Artificial Intelligence		\n" +
    "C		International Journal of Uncertainty, Fuzziness and Knowledge-Based System		\n" +
    "C		International Journal on Document Analysis and Recognition		\n" +
    "C		Journal of Experimental and Theoretical Artificial Intelligence		\n" +
    "C		Knowledge-Based Systems		\n" +
    "C		Machine Translation		\n" +
    "C		Machine Vision and Applications		\n" +
    "C		Natural Computing		\n" +
    "C		Natural Language Engineering		\n" +
    "C		Neural Computing & Applications		\n" +
    "C		Neural Processing Letters		\n" +
    "C		Neurocomputing		\n" +
    "C		Pattern Analysis and Applications		\n" +
    "C		Pattern Recognition Letters		\n" +
    "C		Soft Computing		\n" +
    "C		Web Intelligence		\n" +
    "A		AAAI Conference on Artificial Intelligence		\n" +
    "A		Annual Conference on Neural Information Processing Systems		\n" +
    "A		Annual Conference on Neural Information Processing Systems		\n" +
    "A		Annual Meeting of the Association for Computational Linguistics		\n" +
    "A		IEEE Conference on Computer Vision and Pattern Recognition		\n" +
    "A		International Conference on Computer Vision		\n" +
    "A		International Conference on Machine Learning		\n" +
    "A		International Joint Conference on Artificial Intelligence		\n" +
    "B		Annual Conference on Computational Learning Theory		\n" +
    "B		Conference on Empirical Methods in Natural Language Processing		\n" +
    "B		European Conference on Artificial Intelligence		\n" +
    "B		European Conference on Computer Vision		\n" +
    "B		IEEE International Conference on Robotics and Automation		\n" +
    "B		International Conference on Automated Planning and Scheduling		\n" +
    "B		International Conference on Case-Based Reasoning and Development		\n" +
    "B		International Conference on Computational Linguistics		\n" +
    "B		International Conference on Principles of Knowledge Representation and Reasoning		\n" +
    "B		International Conference on Uncertainty in Artificial Intelligence		\n" +
    "B		International Joint Conference on Autonomous Agents and Multi-agent Systems		\n" +
    "B		Parallel Problem Solving from Nature		\n" +
    "C		Artificial Intelligence and Statistics		\n" +
    "C		Asian Conference on Computer Vision		\n" +
    "C		Asian Conference on Machine Learning		\n" +
    "C		British Machine Vision Conference		\n" +
    "C		CCF International Conference on Natural Language Processing and Chinese Computing		\n" +
    "C		Conference on Computational Natural Language Learning		\n" +
    "C		Genetic and Evolutionary Computation Conference		\n" +
    "C		IEEE International Conference on Tools with Artificial Intelligence		\n" +
    "C		IEEERSJ International Conference on Intelligent Robots and Systems		\n" +
    "C		International Conference on Algorithmic Learning Theory		\n" +
    "C		International Conference on Artificial Neural Networks		\n" +
    "C		International Conference on Automatic Face and Gesture Recognition		\n" +
    "C		International Conference on Document Analysis and Recognition		\n" +
    "C		International Conference on Inductive Logic Programming		\n" +
    "C		International conference on Knowledge Science,Engineering and Management		\n" +
    "C		International Conference on Neural Information Processing		\n" +
    "C		International Conference on Pattern Recognition		\n" +
    "C		International Joint Conference on Biometrics		\n" +
    "C		International Joint Conference on Neural Networks		\n" +
    "C		Pacific Rim International Conference on Artificial Intelligence		\n" +
    "C		The Annual Conference of the North American Chapter of the Association for Computational Linguistics		\n" +
    "A		ACM Transactions on Computer-Human Interaction		\n" +
    "A		International Journal of Human Computer Studies		\n" +
    "B		Computer Supported Cooperative Work		\n" +
    "B		Human Computer Interaction		\n" +
    "B		IEEE Transactions on Human-Machine Systems		\n" +
    "B		IEEE Transactions on Human-Machine Systems		\n" +
    "B		Interacting with Computers		\n" +
    "B		International Journal of Human-Computer Interaction		\n" +
    "B		User Modeling and User-Adapted Interaction		\n" +
    "C		Behaviour & Information Technology		\n" +
    "C		Personal and Ubiquitous Computing		\n" +
    "C		Pervasive and Mobile Computing		\n" +
    "A		ACM Conference on Computer Supported Cooperative Work and Social Computing		\n" +
    "A		ACM Conference on Human Factors in Computing Systems		\n" +
    "A		ACM International Conference on Ubiquitous Computing		\n" +
    "B		ACM Conference on Supporting Group Work		\n" +
    "B		ACM International Conference on Intelligent User Interfaces		\n" +
    "B		ACM International Conference on Interactive Tabletops and Surfaces		\n" +
    "B		ACM International Conference on Interactive Tabletops and Surfaces		\n" +
    "B		ACM Symposium on User Interface Software and Technology		\n" +
    "B		European Conference on Computer Supported Cooperative Work		\n" +
    "B		IEEE International Conference on Pervasive Computing and Communications		\n" +
    "B		International Conference on Human Computer Interaction with Mobile Devices and Services		\n" +
    "C		ACM Conference on Designing Interactive Systems		\n" +
    "C		ACM International Conference on Multimodal Interaction		\n" +
    "C		ACM SIGACCESS Conference on Computers and Accessibility		\n" +
    "C		Graphics Interface conference		\n" +
    "C		IEEE International Conference on Ubiquitous Intelligence and Computing		\n" +
    "C		IEEE World Haptics Conference		\n" +
    "C		IFIP TC13 Conference on Human-Computer Interaction		\n" +
    "C		Interaction Design and Children		\n" +
    "C		International Conference on Collaborative Computing: Networking, Applications and Worksharing		\n" +
    "C		International Conference on Computer Supported Cooperative Work in Design		\n" +
    "C		International Conference on Cooperative Information Systems		\n" +
    "C		International Conference on Mobile and Ubiquitous Systems: Computing,Networking and Services		\n" +
    "C		International Working Conference on Advanced Visual Interfaces		\n" +
    "A		Journal of the ACM		\n" +
    "A		Proceedings of the IEEE		\n" +
    "B		Bioinformatics		\n" +
    "B		Briefings in Bioinformatics		\n" +
    "B		Cognition: International Journal of Cognitive Science		\n" +
    "B		IEEE Transactions on Automation Science and Engineering		\n" +
    "B		IEEE Transactions on Geoscience and Remote Sensing		\n" +
    "B		IEEE Transactions on Intelligent Transportation Systems		\n" +
    "B		IEEE Transactions on Medical Imaging		\n" +
    "B		IEEE Transactions on Robotics		\n" +
    "B		IEEE-ACM Transactions on Computational Biology and Bioinformatics		\n" +
    "B		Journal of Computer Science and Technology		\n" +
    "B		Journal of the American Medical Informatics Association		\n" +
    "B		PLOS Computational Biology		\n" +
    "B		Science China Information Sciences		\n" +
    "B		The Computer Journal		\n" +
    "B		World Wide Web Journal		\n" +
    "C		BMC Bioinformatics		\n" +
    "C		Cybernetics and Systems		\n" +
    "C		Frontiers of Computer Science		\n" +
    "C		IEEE Geoscience and Remote Sensing Letters		\n" +
    "C		IEEE Journal of Biomedical and Health Informatics		\n" +
    "C		IEEE Transactions on Big Data		\n" +
    "C		IET Intelligent Transport Systems		\n" +
    "C		Journal of Biomedical Informatics		\n" +
    "C		Medical Image Analysis		\n" +
    "A		International World Wide Web Conferences		\n" +
    "A		Real-Time Systems Symposium		\n" +
    "B		Cognitive Science Society Annual Conference		\n" +
    "B		IEEE International Conference on Bioinformatics and Biomedicine		\n" +
    "B		International Conference on Embedded Software		\n" +
    "B		International conference on Intelligent Systems for Molecular Biology		\n" +
    "B		International Conference on Research in Computational Molecular Biology		\n" +
    "C		American Medical Informatics Association Annual Symposium		\n" +
    "C		Asia Pacific Bioinformatics Conference		\n" +
    "C		IEEE International Conference on Big Data		\n" +
    "C		IEEE International Conference on Cloud Computing		\n" +
    "C		IEEE International Conference on Systems, Man, and Cybernetics		\n" +
    "C		International Conference on Spatial Information Theory		\n" +
    "C		International Symposium on Bioinformatics Research and Applications";

var ccfFullRank_CCF = {};

for (x of ccfRankList_CCF.split("\n")) {
    y = x.split("\t");
    y[0] = y[0].replace(/A/g, "I");
    y[0] = y[0].replace(/B/g, "II");
    y[0] = y[0].replace(/C/g, "III");

    y[2] = y[2].toUpperCase();
    y[2] = y[2].replace(/ *\([^)]*\) */g, "");
    y[2] = y[2].replace(/AND/g, "");
    y[2] = y[2].replace(/&AMP;/g, "");
    y[2] = y[2].replace(/[^A-Z0-9]/ig, "");

    ccfFullRank_CCF[y[2]] = y[0];
}

const fs = require("fs");
fs.writeFileSync(
    "ccfFullRank_CCF.js",
    "ccf.FullRank_CCF = " + JSON.stringify(ccfFullRank_CCF),
    "utf8"
);