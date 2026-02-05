<?php
namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\BirthdayRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: BirthdayRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['birthday:read']],
    denormalizationContext: ['groups' => ['birthday:write']],
)]
class Birthday
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['birthday:read', 'user:read'])] // user:read ajouté pour voir l'ID dans la liste User
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    // Ajout de 'user:read' pour que le prénom apparaisse dans /api/users
    #[Groups(['birthday:read', 'birthday:write', 'user:read'])]
    private ?string $firstname = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    // Ajout de 'user:read' pour que la date apparaisse dans /api/users
    #[Groups(['birthday:read', 'birthday:write', 'user:read'])]
    private ?\DateTimeInterface $date = null;

    #[ORM\ManyToOne(inversedBy: 'birthdays')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['birthday:read', 'birthday:write'])]
    private ?User $owner = null;

    public function getId(): ?int { return $this->id; }

    public function getFirstname(): ?string { return $this->firstname; }
    public function setFirstname(string $firstname): static { $this->firstname = $firstname; return $this; }

    public function getDate(): ?\DateTimeInterface { return $this->date; }
    public function setDate(\DateTimeInterface $date): static { $this->date = $date; return $this; }

    public function getOwner(): ?User { return $this->owner; }
    public function setOwner(?User $owner): static { $this->owner = $owner; return $this; }
}